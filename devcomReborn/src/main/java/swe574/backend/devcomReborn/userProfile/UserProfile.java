package swe574.backend.devcomReborn.userProfile;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.jpa.domain.support.AuditingEntityListener;
import swe574.backend.devcomReborn.user.User;

@Data
@Builder
@NoArgsConstructor
@AllArgsConstructor
@Entity
@EntityListeners(AuditingEntityListener.class)
public class UserProfile {

    @Id
    @GeneratedValue
    private Long profileId;
    private String bio;
    private String avatarUrl;

    //NOTE imported from devcomReborn.user !!! do not mix with security user!
    @OneToOne(fetch = FetchType.LAZY)
    @JsonBackReference("user-profile")
    @JoinColumn(name = "user_id")
    private User user;

}
