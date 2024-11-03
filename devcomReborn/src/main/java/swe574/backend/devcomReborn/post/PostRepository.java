package swe574.backend.devcomReborn.post;

import org.springframework.data.jpa.repository.JpaRepository;
import swe574.backend.devcomReborn.community.Community;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Long> {
    List<Post> findByCommunity(Community community);
}
