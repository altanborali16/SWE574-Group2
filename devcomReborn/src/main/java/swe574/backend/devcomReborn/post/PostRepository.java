package swe574.backend.devcomReborn.post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import swe574.backend.devcomReborn.community.Community;
import swe574.backend.devcomReborn.template.Template;
import swe574.backend.devcomReborn.user.User;

import java.util.List;

public interface PostRepository extends JpaRepository<Post,Long>, JpaSpecificationExecutor<Post> {
    List<Post> findByCommunity(Community community);
    List<Post> findByAuthor(User author);
    List<Post> findByTemplate(Template template);
    List<Post> findByAuthorAndCommunity(User author, Community community);
}
