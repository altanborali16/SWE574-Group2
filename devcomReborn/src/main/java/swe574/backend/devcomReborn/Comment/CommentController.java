package swe574.backend.devcomReborn.Comment;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import swe574.backend.devcomReborn.post.Post;
import swe574.backend.devcomReborn.post.PostRepository;


import java.util.List;
@RestController
@CrossOrigin
@RequestMapping("/comment")
@RequiredArgsConstructor
public class CommentController {

    private final CommentService commentService;
    private final CommentRepository commentRepository;
    private final PostRepository postRepository;

    @PostMapping("/create/{postId}")
    public ResponseEntity<Comment> createComment(@PathVariable Long postId, @RequestBody Comment comment){
        return ResponseEntity.ok(commentService.createComment(postId,comment));
    }

    @PostMapping("/reply/{postId}/{commentId}")
    public ResponseEntity<Comment> replyComment(@PathVariable Long postId, @PathVariable Long commentId, @RequestBody Comment comment){
        return ResponseEntity.ok(commentService.replyComment(postId,commentId,comment));
    }

    @PostMapping("/delete/{commentId}")
    public ResponseEntity<String> deleteComment(@PathVariable Long commentId){
        return ResponseEntity.ok(commentService.deleteComment(commentId));
    }

    @GetMapping("/postlist/{postId}")
    public ResponseEntity<List<Comment>> getCommentListByPost(@PathVariable Long postId) {
        return ResponseEntity.ok(commentService.getCommentByPost(postId));
    }

    //advanced search
    @GetMapping("/userlist/{userId}")
    public ResponseEntity<List<Comment>> getCommentListByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(commentService.getCommentsByUser(userId));
    }
}
