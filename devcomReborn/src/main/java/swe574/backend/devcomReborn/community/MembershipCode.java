package swe574.backend.devcomReborn.community;

import jakarta.persistence.Embeddable;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@Embeddable
@NoArgsConstructor
@AllArgsConstructor
public class MembershipCode implements Serializable {
    private Long userId;
    private Long communityId;

}
