package swe574.backend.devcomReborn.post;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import swe574.backend.devcomReborn.community.Community;
import swe574.backend.devcomReborn.template.Template;
import swe574.backend.devcomReborn.user.User;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "author_id",nullable = false)
    @JsonIgnoreProperties({"memberships"})
    private User author;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "community_id",nullable = false)
    @JsonBackReference("community-posts")
    @JsonIgnoreProperties({"memberships","templates","posts"})
    private Community community;

    @ManyToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "template_id",nullable = false)
    @JsonIgnoreProperties({"fields","community"})
    private Template template;


}
