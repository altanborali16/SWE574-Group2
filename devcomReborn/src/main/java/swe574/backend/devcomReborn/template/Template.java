package swe574.backend.devcomReborn.template;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Cascade;
import swe574.backend.devcomReborn.Comment.Comment;
import swe574.backend.devcomReborn.community.Community;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Builder
@Table(name="templates")
@JsonIgnoreProperties({"hibernateLazyInitializer", "handler"})
public class Template {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false,unique = true)
    private String name;

    @Column(nullable = false)
    private String description;

    @ManyToOne
    @JoinColumn(name = "community_id")
    @JsonBackReference("community-templates")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Community community;

    @OneToMany(mappedBy = "template",fetch = FetchType.LAZY)
    @Cascade(org.hibernate.annotations.CascadeType.REMOVE)
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    @JsonManagedReference("template-fields")
    private Set<Field> fields;


}
