package swe574.backend.devcomReborn.Comment;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import swe574.backend.devcomReborn.Comment.Comment;
import swe574.backend.devcomReborn.community.Community;
import swe574.backend.devcomReborn.community.CommunityRepository;
import swe574.backend.devcomReborn.post.Post;
import swe574.backend.devcomReborn.post.PostRepository;
import swe574.backend.devcomReborn.template.Field;
import swe574.backend.devcomReborn.template.Template;
import swe574.backend.devcomReborn.template.TemplateRepository;
import swe574.backend.devcomReborn.user.User;
import swe574.backend.devcomReborn.user.UserRepository;


import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class CommentService {

    private final PostRepository postRepository;
    private final CommentRepository commentRepository;
    private final UserRepository userRepository;

    @Transactional
    public Comment createComment(Long postId, Comment comment) {
        User creator = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Post post = postRepository.findById(postId).orElseThrow(()->new NoSuchElementException("There is no such post!"));
        comment.setAuthor(creator);
        comment.setPost(post);
        commentRepository.save(comment);
        return comment;

    }

    @Transactional
    public Comment replyComment(Long postId, Long commentId, Comment comment) {
        User creator = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Post post = postRepository.findById(postId).orElseThrow(()->new NoSuchElementException("There is no such post!"));
        comment.setAuthor(creator);
        comment.setPost(post);
        Comment parentComment = commentRepository.findById(commentId).orElseThrow(()-> new NoSuchElementException("There is no such comment!"));
        comment.setParentComment(parentComment);
        parentComment.getReplies().add(comment);
        commentRepository.save(comment);
        return comment;

    }

    @Transactional
    public String deleteComment(Long commentId){
        Comment comment = commentRepository.findById(commentId).orElseThrow(()-> new NoSuchElementException("There is no such comment!"));
        commentRepository.delete(comment);
        return "Comment deleted";
    }

    public List<Comment> getCommentByPost(Long postId) {
        Post post = postRepository.findById(postId).orElseThrow();
        return commentRepository.findByPost(post);
    }

    public List<Comment> getCommentsByUser(Long userId) {
        User author = userRepository.findById(userId).orElseThrow();
        return commentRepository.findByAuthor(author);
    }




}
