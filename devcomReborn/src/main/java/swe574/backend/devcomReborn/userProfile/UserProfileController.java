package swe574.backend.devcomReborn.userProfile;

import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/profile")
@RequiredArgsConstructor

public class UserProfileController {

    private final UserProfileService service;

    @PostMapping("/create")
    public ResponseEntity<UserProfile> createProfile(
            @RequestBody UserProfile profile) {
        return ResponseEntity.ok(service.createProfile(profile));
    }

    @PutMapping("/update")
    public ResponseEntity<UserProfile> updateProfile(@RequestBody UserProfile profile) {
        UserProfile updatedProfile = service.updateProfile(profile);
        return ResponseEntity.ok(updatedProfile);
    }

    @GetMapping("/currentProfile")
    public ResponseEntity<UserProfile> getCurrentProfile() {
        return ResponseEntity.ok(service.getCurrentProfile());
    }
}