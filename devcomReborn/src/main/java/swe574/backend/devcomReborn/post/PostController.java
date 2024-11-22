package swe574.backend.devcomReborn.post;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import swe574.backend.devcomReborn.community.CommunityRepository;
import swe574.backend.devcomReborn.user.User;

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

    @PostMapping("/delete/{postId}")
    public ResponseEntity<String> deletePost(@PathVariable Long postId){
        return ResponseEntity.ok(postService.deletePost(postId));
    }

    @GetMapping("/list/{communityId}")
    public ResponseEntity<List<Post>> getPostList(@PathVariable Long communityId) {
        return ResponseEntity.ok(postService.getPostList(communityId));
    }

    @GetMapping("/list/{templateId}")
    public ResponseEntity<List<Post>> getPostListByTemplate(@PathVariable Long templateId) {
        return ResponseEntity.ok(postService.getPostListByTemplate(templateId));
    }

    @PostMapping("/upvote/{postId}")
    public ResponseEntity<String> upVotePost(@PathVariable Long postId) {
        return ResponseEntity.ok(postService.upVotePost(postId));
    }

    @PostMapping("/downvote/{postId}")
    public ResponseEntity<String> downVotePost(@PathVariable Long postId) {
        return ResponseEntity.ok(postService.downVotePost(postId));
    }

    @GetMapping("/recommendations")
    public ResponseEntity<List<Post>> getRecommendedPosts() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok(postService.getRecommendedPosts(user));
    }

}
