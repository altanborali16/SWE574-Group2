package swe574.backend.devcomReborn.community;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swe574.backend.devcomReborn.Comment.CommentRepository;
import swe574.backend.devcomReborn.community.dto.MemberDTO;
import swe574.backend.devcomReborn.post.PostRepository;
import swe574.backend.devcomReborn.user.User;
import swe574.backend.devcomReborn.user.UserRepository;

import java.util.List;
import java.util.NoSuchElementException;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor
public class CommunityService {
    private final CommunityRepository communityRepository;
    private final MembershipRepository membershipRepository;
    private final UserRepository userRepository;
    private final PostRepository postRepository;
    private final CommentRepository commentRepository;

    public Community getCommunity(Long id) {
        return communityRepository.findById(id).orElseThrow();
    }

    public List<Community> getCommunityList() {
        return communityRepository.findAll();
    }

    @Transactional
    public Community createCommunity(Community community) {
        User owner = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        community.setOwner(owner);
        CommunityRole communityRole = CommunityRole.CREATOR;
        Community createdCommunity = communityRepository.save(community);
        MembershipCode membershipCode = new MembershipCode(owner.getId(), createdCommunity.getId());
        membershipRepository.save(new Membership(membershipCode, owner, createdCommunity, communityRole));
        return createdCommunity;
    }

    //TODO: has no role null check! if role has emtpy value what happens? test it!
    @Transactional
    public Membership joinCommunity(Long id) {
        User joiner = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Community community = communityRepository.findById(id).orElseThrow();
        MembershipCode membershipCode = new MembershipCode(joiner.getId(), community.getId());
        Optional<Membership> currentMembership = membershipRepository.findById(membershipCode);
        if (currentMembership.isPresent()) throw new RuntimeException("User is already a member");
        return membershipRepository.save(new Membership(membershipCode, joiner, community, CommunityRole.MEMBER));
    }

    @Transactional
    public String leaveCommunity(Long id) {
        User leaver = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        MembershipCode membershipCode = new MembershipCode(leaver.getId(), id);
        Membership currentMembership = membershipRepository.findById(membershipCode).orElseThrow(() -> new NoSuchElementException("You need to be a member to leave the community"));
        if (currentMembership.getRole().equals(CommunityRole.CREATOR))
            throw new RuntimeException("As the community creator you can not leave the community!");
        membershipRepository.delete(currentMembership);
        return "The user:" + leaver.getUsername() + "have left the community";
    }

    public List<MemberDTO> getCommunityMembers(Long communityId) {
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

    public Long getPostCountByUserInCommunity(Long userId, Long communityId) {
        User author = userRepository.findById(userId).orElseThrow();
        Community community = communityRepository.findById(communityId).orElseThrow();
        return postRepository.findByAuthorAndCommunity(author, community).stream().count();
    }

    public Long getCommentCountByUserInCommunity(Long userId, Long communityId) {
        return commentRepository.countCommentsByUserIdAndCommunityId(userId,communityId);

    }


}
