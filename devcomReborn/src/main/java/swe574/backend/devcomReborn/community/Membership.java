package swe574.backend.devcomReborn.community;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import swe574.backend.devcomReborn.user.User;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Membership {

    @EmbeddedId
    private MembershipCode id;

    private String communityRole;

    @ManyToOne
    @MapsId("userId")
    @JoinColumn(name = "user_id")
    @JsonBackReference("user-memberships")
    @EqualsAndHashCode.Exclude
    private User user;

    @ManyToOne
    @MapsId("communityId")
    @JoinColumn(name = "community_id")
    @JsonBackReference("community-members")
    @EqualsAndHashCode.Exclude
    private Community community;
}