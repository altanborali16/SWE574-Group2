package swe574.backend.devcomReborn.community;

import com.fasterxml.jackson.annotation.JsonBackReference;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.Cascade;
import swe574.backend.devcomReborn.user.User;

import java.util.Set;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="communities")
public class Community {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false,unique = true)
    private String name;
    private String communityDescription;
    @Column(name = "is_private",nullable = false)
    private boolean isPrivate;
    private boolean isArchived;

    @ManyToOne
    @JoinColumn(name = "owner_id")
    @JsonBackReference("community-owner")
    @JsonIgnore
    private User owner;

    @OneToMany(mappedBy = "community",fetch = FetchType.EAGER)
    @Cascade(org.hibernate.annotations.CascadeType.DELETE_ORPHAN)
    @JsonManagedReference("community-members")
    @EqualsAndHashCode.Exclude
    @ToString.Exclude
    private Set<Membership> memberships;

}
