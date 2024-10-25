package swe574.backend.devcomReborn.community;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    public ResponseEntity<Community> getCommunityList (@PathVariable Long id){
        return ResponseEntity.ok(communityService.getCommunity(id));
    }

}
