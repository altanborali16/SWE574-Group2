package swe574.backend.devcomReborn.Comment;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import swe574.backend.devcomReborn.Comment.Comment;
import swe574.backend.devcomReborn.community.Community;
import swe574.backend.devcomReborn.post.Post;
import swe574.backend.devcomReborn.template.Template;
import swe574.backend.devcomReborn.user.User;

import java.util.List;

public interface CommentRepository extends JpaRepository<Comment,Long> {
    List<Comment> findByPost(Post post);
    List<Comment> findByAuthor(User author);
    @Query("SELECT COUNT(c) FROM Comment c WHERE c.author.id = :userId AND c.post.community.id = :communityId")
    long countCommentsByUserIdAndCommunityId(@Param("userId") Long userId, @Param("communityId") Long communityId);

}
