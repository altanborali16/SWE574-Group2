package swe574.backend.devcomReborn.post;

import lombok.RequiredArgsConstructor;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swe574.backend.devcomReborn.community.Community;
import swe574.backend.devcomReborn.community.CommunityRepository;
import swe574.backend.devcomReborn.template.FieldRepository;
import swe574.backend.devcomReborn.template.Template;
import swe574.backend.devcomReborn.template.TemplateRepository;
import swe574.backend.devcomReborn.user.User;

import java.util.NoSuchElementException;

@Service
@RequiredArgsConstructor
public class PostService {

    private final PostRepository postRepository;
    private final CommunityRepository communityRepository;
    private final TemplateRepository templateRepository;
    private final PostContentRepository postContentRepository;

    //TODO: add validation to post creation
    @Transactional
    public Post createPost(Long communityId, Post post) {
        User creator = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Community community = communityRepository.findById(communityId).orElseThrow(() -> new RuntimeException("Community not found"));
        Template postTemplate = templateRepository.findById(post.getTemplate().getId()).orElseThrow(() -> new RuntimeException("Template not found"));
        post.setCommunity(community);
        post.setAuthor(creator);
        Post createdPost = postRepository.save(post);
        for(PostContent postField: post.getPostContents()){
            postField.setPost(createdPost);
        }
        postContentRepository.saveAll(post.getPostContents());
        return  createdPost;
    }

    @Transactional
    public String deletePost(Long communityId){
        Post post = postRepository.findById(communityId).orElseThrow(()->new NoSuchElementException("There is no such post!"));
        postRepository.delete(post);
        return "Post deleted";
    }
}
