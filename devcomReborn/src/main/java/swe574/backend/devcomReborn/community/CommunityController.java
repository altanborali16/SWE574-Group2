package swe574.backend.devcomReborn.community;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

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

}
