package swe574.backend.devcomReborn.community;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import swe574.backend.devcomReborn.Comment.CommentRepository;
import swe574.backend.devcomReborn.community.dto.MemberDTO;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/community")
@RequiredArgsConstructor
public class CommunityController {
    private final CommunityService communityService;
    private final CommentRepository commentRepository;

    @GetMapping("/{id}")
    public ResponseEntity<Community> getCommunity (@PathVariable Long id){
        return ResponseEntity.ok(communityService.getCommunity(id));
    }

    @GetMapping("/list")
    public ResponseEntity<List<Community>> getCommunityList (){
        return ResponseEntity.ok(communityService.getCommunityList());
    }

    @PostMapping("/create")
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

    @GetMapping("/userPostCount/{communityId}/{userId}")
    public ResponseEntity<Long> getPostCountByUserInCommunity(@PathVariable Long userId, @PathVariable Long communityId) {
        return ResponseEntity.ok(communityService.getPostCountByUserInCommunity(userId, communityId));
    }
    @GetMapping("/userCommentCount/{communityId}/{userId}")
    public long countCommentsByUserAndCommunity(@PathVariable Long communityId, @PathVariable Long userId) {
        return commentRepository.countCommentsByUserIdAndCommunityId(userId, communityId);
    }
}
