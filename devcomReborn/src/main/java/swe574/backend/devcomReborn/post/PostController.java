package swe574.backend.devcomReborn.post;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import swe574.backend.devcomReborn.community.Community;
import swe574.backend.devcomReborn.community.CommunityRepository;
import swe574.backend.devcomReborn.template.Template;

import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/post")
@RequiredArgsConstructor
public class PostController {

    private final PostService postService;

    private final CommunityRepository communityRepository;

    private final PostRepository postRepository;

    @PostMapping("/create/{communityId}")
    public ResponseEntity<Post> createPost(@PathVariable Long communityId, @RequestBody Post post){
        return ResponseEntity.ok(postService.createPost(communityId,post));
    }

    @DeleteMapping("/delete/{communityId}")
    public ResponseEntity<String> deletePost(@PathVariable Long communityId){
        return ResponseEntity.ok(postService.deletePost(communityId));
    }

    @GetMapping("/list/{communityId}")
    public ResponseEntity<List<Post>> getPostList(@PathVariable Long communityId) {
        return ResponseEntity.ok(postService.getPostList(communityId));
    }
}
