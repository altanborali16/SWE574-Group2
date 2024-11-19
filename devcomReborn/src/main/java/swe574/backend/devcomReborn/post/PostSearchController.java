package swe574.backend.devcomReborn.post;

import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.*;
import swe574.backend.devcomReborn.community.CommunityRepository;
import swe574.backend.devcomReborn.user.User;

import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@Slf4j
@RestController
@CrossOrigin
@RequiredArgsConstructor
public class PostSearchController {

    private final PostService postService;

    //advanced search
    // example URL to call : community/1/search?templateId=123&1=jamesbond
    //the second request param 1 is the ID of the template field in the template 123
    @GetMapping("/community/{communityId}/search")
    public ResponseEntity<List<Post>> searchCommunityPosts(@PathVariable String communityId, @RequestParam Map<String, String> parameters) {
        String templateId=parameters.get("templateId");
        Map<Long, String> fields = parameters.entrySet().stream()
                .filter(e->!"templateId".equals(e.getKey()))
                .collect(Collectors.toMap(e->Long.parseLong(e.getKey()),e->e.getValue()));
        log.info(templateId);
        log.info(fields.toString());
        return ResponseEntity.ok(postService.searchPosts(communityId, templateId, fields));
    }

    // example URL to call : /postsByTemplateId?templateId=123
    @GetMapping("/postsByTemplateId")
    public ResponseEntity<List<Post>> getPostListByTemplate(@RequestParam Long templateId) {
        return ResponseEntity.ok(postService.getPostListByTemplate(templateId));
    }

    @GetMapping("/recommendedPosts")
    public ResponseEntity<List<Post>> getRecommendedPosts() {
        User user = (User) SecurityContextHolder.getContext().getAuthentication().getPrincipal();
        return ResponseEntity.ok(postService.getRecommendedPosts(user.getId()));
    }
}
