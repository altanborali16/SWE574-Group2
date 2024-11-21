package swe574.backend.devcomReborn.community;

import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swe574.backend.devcomReborn.community.dto.MemberDTO;
import swe574.backend.devcomReborn.tag.Tag;
import swe574.backend.devcomReborn.tag.TagRepository;
import swe574.backend.devcomReborn.user.User;
import java.util.HashSet;
import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;
import java.util.Set;
import java.net.URL;
import org.springframework.web.multipart.MultipartFile;
import java.io.IOException;


@Service
@RequiredArgsConstructor
public class CommunityService {
    private final CommunityRepository communityRepository;
    private final MembershipRepository membershipRepository;
    private final TagRepository tagRepository;

    public Community getCommunity(Long id){
        return communityRepository.findById(id).orElseThrow();
    }
    public List<Community> getCommunityList(){
        return communityRepository.findAll();
    }

    @Transactional
    public Community createCommunity(Community community) {
        User owner = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        community.setOwner(owner);
        CommunityRole communityRole = CommunityRole.CREATOR;

        Set<Tag> processedTags = new HashSet<>();
        if (community.getTags() != null) {
            for (String tagName : community.getTags().stream().map(Tag::getName).collect(Collectors.toSet())) {
                Optional<Tag> existingTag = tagRepository.findByName(tagName);
                if (existingTag.isPresent()) {
                    processedTags.add(existingTag.get());
                } else {
                    Tag newTag = new Tag();
                    newTag.setName(tagName);
                    tagRepository.save(newTag);
                    processedTags.add(newTag);
                }
            }
        }
        community.setTags(processedTags);
        Community createdCommunity = communityRepository.save(community);
        MembershipCode membershipCode = new MembershipCode(owner.getId(), createdCommunity.getId());
        membershipRepository.save(new Membership(membershipCode, owner, createdCommunity,communityRole));

        return createdCommunity;
    }

//TODO: has no role null check! if role has emtpy value what happens? test it!
    @Transactional
    public Membership joinCommunity(Long id){
        User joiner= (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Community community = communityRepository.findById(id).orElseThrow();
        MembershipCode membershipCode = new MembershipCode(joiner.getId(), community.getId());
        Optional<Membership> currentMembership=membershipRepository.findById(membershipCode);
        if(currentMembership.isPresent()) throw new RuntimeException("User is already a member");
        return membershipRepository.save(new Membership(membershipCode,joiner,community,CommunityRole.MEMBER));
    }

    @Transactional
    public String leaveCommunity(Long id) {
        User leaver = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        MembershipCode membershipCode = new MembershipCode(leaver.getId(), id);
        Membership currentMembership = membershipRepository.findById(membershipCode).orElseThrow(()->new NoSuchElementException("You need to be a member to leave the community"));
        if(currentMembership.getRole().equals(CommunityRole.CREATOR)) throw new RuntimeException("As the community creator you can not leave the community!");
        membershipRepository.delete(currentMembership);
        return "The user:"+ leaver.getUsername() + "have left the community";
    }

    public List<MemberDTO> getCommunityMembers(Long communityId){
        Community community = communityRepository.findById(communityId)
                .orElseThrow(() -> new RuntimeException("Community not found with ID: " + communityId));

        List<Membership> memberships = membershipRepository.findByCommunity(community);
        return memberships.stream()
                .map(membership -> {
                    User user = membership.getUser();
                    return new MemberDTO(user.getId(), user.getUsername(), user.getEmail());
                })
                .collect(Collectors.toList());
    }

    @Transactional
    public void uploadCommunityImage(Long communityId, MultipartFile imageFile) {
        Community community = communityRepository.findById(communityId)
                .orElseThrow(() -> new RuntimeException("Community not found"));

        // Check if the user is authorized to upload/update the image
        User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (!community.getOwner().getId().equals(currentUser.getId())) {
            throw new RuntimeException("You are not authorized to upload/update the image for this community");
        }

        try {
            // Validate the file
            validateImageFile(imageFile);

            // Set the image data and type
            community.setImageData(imageFile.getBytes());
            community.setImageType(imageFile.getContentType());

            // Save the community
            communityRepository.save(community);
        } catch (IOException e) {
            throw new RuntimeException("Failed to upload image", e);
        }
    }

    @Transactional(readOnly = true)
    public ResponseEntity<byte[]> getCommunityImage(Long communityId) {
        Community community = communityRepository.findById(communityId)
                .orElseThrow(() -> new RuntimeException("Community not found"));

        byte[] imageData = community.getImageData();
        if (imageData == null) {
            throw new RuntimeException("No image found for this community");
        }

        // Build the response with appropriate headers
        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.parseMediaType(community.getImageType()));
        headers.setContentLength(imageData.length);

        return ResponseEntity.ok()
                .headers(headers)
                .body(imageData);
    }

    @Transactional
    public void deleteCommunityImage(Long communityId) {
        Community community = communityRepository.findById(communityId)
                .orElseThrow(() -> new RuntimeException("Community not found"));

        // Check if the user is authorized to delete the image
        User currentUser = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        if (!community.getOwner().getId().equals(currentUser.getId())) {
            throw new RuntimeException("You are not authorized to delete the image for this community");
        }

        community.setImageData(null);
        community.setImageType(null);
        communityRepository.save(community);
    }

    private void validateImageFile(MultipartFile imageFile) {
        if (imageFile.isEmpty()) {
            throw new RuntimeException("Uploaded file is empty");
        }

        if (!imageFile.getContentType().startsWith("image/")) {
            throw new RuntimeException("Uploaded file is not an image");
        }

        long maxFileSize = 5 * 1024 * 1024; // 5 MB
        if (imageFile.getSize() > maxFileSize) {
            throw new RuntimeException("File size exceeds the maximum limit");
        }
    }

    public List<Community> getRecommendedCommunities(User user) {
        return communityRepository.findRecommendedCommunities(user);
    }

}
