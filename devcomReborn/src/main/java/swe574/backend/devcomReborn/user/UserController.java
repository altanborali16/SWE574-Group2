package swe574.backend.devcomReborn.user;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.parameters.P;
import org.springframework.web.bind.annotation.*;
import swe574.backend.devcomReborn.post.PostService;

@RestController
@CrossOrigin
@RequestMapping("/user")
@RequiredArgsConstructor
public class UserController {
    private final UserService userService;
    private final PostService postService;


    @GetMapping("/{id}")
    public ResponseEntity<User> getUser(@P("id") @PathVariable Long id){
        return ResponseEntity.ok(userService.getUser(id));
    }

    @GetMapping("/userPostCount/{userId}")
    public ResponseEntity<Long> getPostCountByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getPostCountByUser(userId));
    }

    @GetMapping("/userCommunityCount/{userId}")
    public ResponseEntity<Long> getCommunityCountByUser(@PathVariable Long userId) {
        return ResponseEntity.ok(userService.getCommunityCountByUser(userId));
    }


}
