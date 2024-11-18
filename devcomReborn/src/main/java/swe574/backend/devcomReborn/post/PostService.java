package swe574.backend.devcomReborn.post;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import swe574.backend.devcomReborn.community.Community;
import swe574.backend.devcomReborn.community.CommunityRepository;
import swe574.backend.devcomReborn.template.Field;
import swe574.backend.devcomReborn.template.Template;
import swe574.backend.devcomReborn.template.TemplateRepository;
import swe574.backend.devcomReborn.user.User;
import swe574.backend.devcomReborn.user.UserRepository;

import java.util.List;
import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final CommunityRepository communityRepository;
    private final TemplateRepository templateRepository;
    private final PostContentRepository postContentRepository;

    private final UserRepository userRepository;

    //TODO: add validation to post creation
    @Transactional
    public Post createPost(Long communityId, Post post) {
        User creator = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Community community = communityRepository.findById(communityId).orElseThrow(() -> new RuntimeException("Community not found"));
        Template postTemplate = templateRepository.findById(post.getTemplate().getId()).orElseThrow(() -> new RuntimeException("Template not found"));
        if(!postTemplate.getCommunity().getId().equals(community.getId())) throw new RuntimeException("Community does not support this template");
        post.setCommunity(community);
        post.setAuthor(creator);
        Post createdPost = postRepository.save(post);
        for(PostContent postContent: post.getPostContents()){
            postContent.setPost(createdPost);
        }
        postContentRepository.saveAll(post.getPostContents());
        return  createdPost;
    }

    @Transactional
    public String deletePost(Long postId){
        Post post = postRepository.findById(postId).orElseThrow(()->new NoSuchElementException("There is no such post!"));
        postRepository.delete(post);
        return "Post deleted";
    }

    public List<Post> getPostList(Long communityId) {
        Community community = communityRepository.findById(communityId).orElseThrow();
        return postRepository.findByCommunity(community);
    }

    public List<Post> getPostListByUser(Long userId) {
        User author = userRepository.findById(userId).orElseThrow();
        return postRepository.findByAuthor(author);
    }

    public List<Post> getPostListByTemplate(Long templateId) {
        Template template = templateRepository.findById(templateId).orElseThrow();
        return postRepository.findByTemplate(template);
    }
    // voting with toggle function
//helper method "toggleVote"
    private void toggleVote(Post post, User voter, int voteChange) {
        if (!post.getVoters().contains(voter)) {
            post.setVoteCounter(post.getVoteCounter() + voteChange);
            post.getVoters().add(voter);
        } else {
            post.setVoteCounter(post.getVoteCounter() - voteChange);
            post.getVoters().remove(voter);
        }
    }
    //upvote
    @Transactional
    public String upVotePost(Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(()->new NoSuchElementException("There is no such post!"));
        User voter = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        toggleVote(post, voter, 1);
        postRepository.save(post);
        return "Post upvoted successfully.";
    }
    //downvote
    @Transactional
    public String downVotePost(Long postId) {
        Post post = postRepository.findById(postId).orElseThrow(()->new NoSuchElementException("There is no such post!"));
        User voter = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        toggleVote(post, voter, -1);
        postRepository.save(post);
        return "Post downvoted successfully.";
    }


}
