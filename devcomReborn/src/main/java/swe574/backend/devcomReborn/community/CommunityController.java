package swe574.backend.devcomReborn.community;

import lombok.RequiredArgsConstructor;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import swe574.backend.devcomReborn.community.dto.MemberDTO;

import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin
@RequestMapping("/community")
@RequiredArgsConstructor
public class CommunityController {
    private final CommunityService communityService;

    @GetMapping("/{id}")
    public ResponseEntity<Community> getCommunity (@PathVariable Long id){
        return ResponseEntity.ok(communityService.getCommunity(id));
    }

    @GetMapping("/list")
    public ResponseEntity<List<Community>> getCommunityList (){
        return ResponseEntity.ok(communityService.getCommunityList());
    }

//    @PostMapping("/create")
    @PostMapping(value = "/create", consumes = {"application/json", "application/json;charset=UTF-8"})
    public ResponseEntity<Community> createCommunity(@RequestBody Community community){

        return ResponseEntity.ok(communityService.createCommunity(community));
    }

    @PostMapping("/join/{id}")
    public ResponseEntity<Membership> joinCommunity(@PathVariable Long id){
        return ResponseEntity.ok(communityService.joinCommunity(id));
    }
    @DeleteMapping("/leave/{id}")
    public ResponseEntity<String> leaveCommunity(@PathVariable Long id){
        return ResponseEntity.ok(communityService.leaveCommunity(id));
    }

    @GetMapping("/members/{communityId}")
    public ResponseEntity<List<MemberDTO>> getCommunityMembers(@PathVariable Long communityId){
        List<MemberDTO> members = communityService.getCommunityMembers(communityId);
        return ResponseEntity.ok(members);
    }

    @PostMapping(value = "/{communityId}/image", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    public ResponseEntity<String> uploadCommunityImage(
            @PathVariable Long communityId,
            @RequestParam("image") MultipartFile imageFile) {
        communityService.uploadCommunityImage(communityId, imageFile);
        return ResponseEntity.ok("Image uploaded successfully");
    }

    @GetMapping("/{communityId}/image")
    public ResponseEntity<byte[]> getCommunityImage(@PathVariable Long communityId) {
        return communityService.getCommunityImage(communityId);
    }

    @DeleteMapping("/{communityId}/image")
    public ResponseEntity<String> deleteCommunityImage(@PathVariable Long communityId) {
        communityService.deleteCommunityImage(communityId);
        return ResponseEntity.ok("Image deleted successfully");
    }


}
