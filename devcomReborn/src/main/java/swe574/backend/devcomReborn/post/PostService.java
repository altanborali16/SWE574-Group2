package swe574.backend.devcomReborn.post;

import jakarta.persistence.criteria.Join;
import jakarta.persistence.criteria.JoinType;
import jakarta.persistence.criteria.Predicate;
import lombok.RequiredArgsConstructor;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import swe574.backend.devcomReborn.community.Community;
import swe574.backend.devcomReborn.community.CommunityRepository;
import swe574.backend.devcomReborn.template.Template;
import swe574.backend.devcomReborn.template.TemplateRepository;
import swe574.backend.devcomReborn.user.User;
import swe574.backend.devcomReborn.user.UserRepository;

import java.util.*;
import java.util.stream.Stream;

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
        checkFieldDataType(post);
        User creator = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        Community community = communityRepository.findById(communityId).orElseThrow(() -> new RuntimeException("Community not found"));
        Template postTemplate = templateRepository.findById(post.getTemplate().getId()).orElseThrow(() -> new RuntimeException("Template not found"));
        if (!postTemplate.getCommunity().getId().equals(community.getId()))
            throw new RuntimeException("Community does not support this template");
        post.setCommunity(community);
        post.setAuthor(creator);
        Post createdPost = postRepository.save(post);
        for (PostContent postContent : post.getPostContents()) {
            postContent.setPost(createdPost);
        }
        postContentRepository.saveAll(post.getPostContents());
        return createdPost;
    }

    private void checkFieldDataType(Post post) {
        post.getPostContents().stream()
                .forEach(postContent -> postContent.getField()
                        .getDataType()
                        .validate(postContent.getValue()));
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
    //dont forget the important edge case!

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


    public List<Post> searchPosts(String communityId, String templateId, Map<Long, String> fields) {
        Specification<Post> spec = buildSpec(communityId, templateId, fields);
        return postRepository.findAll(spec);
    }

    private static Specification<Post> buildSpec(String communityId, String templateId, Map<Long, String> contentCriteria) {
        return (root, query, criteriaBuilder) -> {
            // Basic conjunction predicate to combine with other conditions
            Predicate communityPredicate = criteriaBuilder.equal(root.get("community").get("id"), communityId);
            if (contentCriteria == null || contentCriteria.isEmpty()) {
                return communityPredicate; // Only filter by communityId if no other criteria are specified
            }

            // Join Post with PostContent
            Join<Post, PostContent> postContentJoin = root.join("postContents", JoinType.INNER);

            // Create Predicate for each contentCriteria entry
            Predicate[] predicates = contentCriteria.entrySet().stream()
                    .map(entry -> {
                        Long id = entry.getKey();
                        String value = entry.getValue();
                        return criteriaBuilder.and(
                                criteriaBuilder.equal(postContentJoin.get("field").get("id"), id),
                                criteriaBuilder.like(postContentJoin.get("value"), "%" + value + "%") // Contains/like match
                        );
                    })
                    .toArray(Predicate[]::new);

            // Combine contentPredicates with OR, and then AND with the communityPredicate
            Predicate contentCriteriaPredicate = criteriaBuilder.or(predicates);
            return criteriaBuilder.and(communityPredicate, contentCriteriaPredicate);
        };
    }

    public List<Post> getRecommendedPostsBasedOnLikes(User user) {
        List<Community> communities = communityRepository.findRecommendedCommunitiesBasedOnLikes(user);
        if (communities.isEmpty()) {
            communities = communityRepository.findPublicCommunitiesWhereNoMembershipExistsFor(user);
        }
        List<Post> top10PostsFromAllCommunities = get10PostsFromAllCommunities(communities, Comparator.comparingInt(Post::getVoteCounter), user);
        List<Post> newest10PostsFromAllCommunities = get10PostsFromAllCommunities(communities, Comparator.comparing(Post::getTime), user);
        return Stream.concat(top10PostsFromAllCommunities.stream(), newest10PostsFromAllCommunities.stream()).distinct().toList();
    }

    public List<Post> getRecommendedPostsBasedOnMembership(User user) {
        List<Community> communities = communityRepository.findRecommendedCommunitiesBasedOnMembership(user);
        if (communities.isEmpty()) {
            communities = communityRepository.findPublicCommunitiesWhereNoMembershipExistsFor(user);
        }
        List<Post> top10PostsFromAllCommunities = get10PostsFromAllCommunities(communities, Comparator.comparingInt(Post::getVoteCounter), user);
        List<Post> newest10PostsFromAllCommunities = get10PostsFromAllCommunities(communities, Comparator.comparing(Post::getTime), user);
        return Stream.concat(top10PostsFromAllCommunities.stream(), newest10PostsFromAllCommunities.stream()).distinct().toList();
    }

    private static List<Post> get10PostsFromAllCommunities(List<Community> communities, Comparator<Post> comparator, User user) {
        return communities.stream()
                .flatMap(c -> c.getPosts().stream())
                .filter(p -> !p.getVoters().contains(user))
                .sorted(comparator)
                .limit(10)
                .toList();
    }
}

