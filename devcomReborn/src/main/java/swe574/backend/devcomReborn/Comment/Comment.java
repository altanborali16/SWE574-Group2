package swe574.backend.devcomReborn.Comment;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Cascade;
import swe574.backend.devcomReborn.community.Community;
import swe574.backend.devcomReborn.post.Post;
import swe574.backend.devcomReborn.template.Template;
import swe574.backend.devcomReborn.user.User;

import java.time.LocalDateTime;
import java.util.Objects;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Comment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private long id;

    @Column
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime time;

    @Column(nullable = false, length = 2000)
    private String content;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "comment_author_id",nullable = false)
    @JsonIgnoreProperties({"memberships","password"})
    private User author;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "post_id",nullable = false)
    @JsonBackReference("post-comments")
    @JsonIgnoreProperties({"community","template","voteCounter"})
    private Post post;

    // Self-referencing relationship for parent comment
    @ManyToOne(fetch = FetchType.LAZY, cascade = CascadeType.PERSIST)
    @JoinColumn(name = "parent_comment_id", nullable = true)
    @JsonBackReference("parent-comment")
    private Comment parentComment;

    // Collection to store replies to this comment
    @OneToMany(mappedBy = "parentComment", cascade = CascadeType.ALL, orphanRemoval = true)
    @JsonManagedReference("parent-comment")
    private Set<Comment> replies;

    @Override
    public int hashCode() {
        return Objects.hash(id); // Only include id to avoid circular reference
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Comment comment = (Comment) o;
        return id == comment.id; // Only compare the id field to avoid circular comparison
    }


}
