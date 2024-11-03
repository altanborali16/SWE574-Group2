package swe574.backend.devcomReborn.post;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
@RequestMapping("/post")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    @PostMapping("/create/{communityId}")
    public ResponseEntity<Post> createPost(@PathVariable Long communityId, @RequestBody Post post){
        return ResponseEntity.ok(postService.createPost(communityId,post));
    }

    @DeleteMapping("/delete/{communityId}")
    public ResponseEntity<String> deletePost(@PathVariable Long communityId){
        return ResponseEntity.ok(postService.deletePost(communityId));
    }
}
