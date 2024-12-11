package swe574.backend.devcomReborn.user;

import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import swe574.backend.devcomReborn.community.CommunityRepository;
import swe574.backend.devcomReborn.community.MembershipRepository;
import swe574.backend.devcomReborn.post.PostRepository;

@Service
@RequiredArgsConstructor
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder passwordEncoder;
    private final PostRepository postRepository;
    private final MembershipRepository membershipRepository;


    public User getUser(Long id){return userRepository.findById(id).orElseThrow();
    }

    public Long getPostCountByUser(Long userId) {
        User author = userRepository.findById(userId).orElseThrow();
        return postRepository.findByAuthor(author).stream().count();
    }

//    public Long getCommunityCountByUser(Long userId) {
//        User user = userRepository.findById(userId).orElseThrow();
//        return membershipRepository.findByUser(user).stream().count();
//
//    }
    public Long getCommunityCountByUser(Long userId) {
        return membershipRepository.countByUserId(userId);
    }
}
