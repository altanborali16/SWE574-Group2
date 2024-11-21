package swe574.backend.devcomReborn.tag;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import lombok.*;
import swe574.backend.devcomReborn.community.Community;
import swe574.backend.devcomReborn.post.Post;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name = "tags")
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable=false, unique=true)
    private String name;

//    @ManyToMany(mappedBy = "tags")
//    @JsonBackReference("community-tags")
//    private Set<Community> communities;
//
//    @ManyToMany(mappedBy = "tags")
//    @JsonBackReference("post-tags")
//    private Set<Post> posts;


    @ManyToMany(mappedBy = "tags")
    @JsonIgnore // Ignore communities during serialization
    private Set<Community> communities;

    @ManyToMany(mappedBy = "tags")
    @JsonIgnore // Ignore posts during serialization
    private Set<Post> posts;
}
