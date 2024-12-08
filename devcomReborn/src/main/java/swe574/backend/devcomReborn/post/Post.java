package swe574.backend.devcomReborn.post;

import com.fasterxml.jackson.annotation.*;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Cascade;
import swe574.backend.devcomReborn.Comment.Comment;
import swe574.backend.devcomReborn.community.Community;
import swe574.backend.devcomReborn.tag.Tag;
import swe574.backend.devcomReborn.template.Template;
import swe574.backend.devcomReborn.user.User;

import java.time.LocalDateTime;
import java.util.Set;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String title;

    //TODO: test date add related endpoints
    @Column
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd'T'HH:mm:ss")
    private LocalDateTime time;

    //TODO: create post returns user password lol
    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "author_id",nullable = false)
    @JsonIgnoreProperties({"memberships","password"})
    private User author;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "community_id",nullable = false)
// Yana: Commented out the following annotations to be able to return the communityId
//    @JsonBackReference("community-posts")
//    @JsonIgnoreProperties({"memberships","templates","posts"})
    @JsonIncludeProperties({ "id" })
    private Community community;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "template_id",nullable = false)
    @JsonIgnoreProperties({"fields","community"})
    private Template template;

    @OneToMany(mappedBy = "post",fetch = FetchType.LAZY)
    @Cascade(org.hibernate.annotations.CascadeType.REMOVE)
    @JsonManagedReference("post-contents")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Set<PostContent> postContents;
    // New attribute for vote count
    @Column
    private int voteCounter;

    // New attribute to track users who voted
    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "post_user_votes",
            joinColumns = @JoinColumn(name = "post_id"),
            inverseJoinColumns = @JoinColumn(name = "user_id")
    )
    @JsonIgnoreProperties({"memberships", "password", "posts"})
    private Set<User> voters;

//    @ManyToMany(fetch = FetchType.LAZY)
//    @JoinTable(
//            name = "post_tags",
//            joinColumns = @JoinColumn(name = "post_id"),
//            inverseJoinColumns = @JoinColumn(name = "tag_id")
//    )
//    @JsonManagedReference("post-tags")
//    @EqualsAndHashCode.Exclude
//    @ToString.Exclude
//    private Set<Tag> tags;


    @ManyToMany(fetch = FetchType.LAZY)
    @JoinTable(
            name = "post_tags",
            joinColumns = @JoinColumn(name = "post_id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id")
    )
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Set<Tag> tags;

    @OneToMany(mappedBy = "post",fetch = FetchType.LAZY)
    @Cascade(org.hibernate.annotations.CascadeType.REMOVE)
    @JsonManagedReference("post-comments")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @JsonIgnoreProperties({"post"})
    private Set<Comment> comments;

}
