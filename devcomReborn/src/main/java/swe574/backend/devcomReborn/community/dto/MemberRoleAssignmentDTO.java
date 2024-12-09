package swe574.backend.devcomReborn.community.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import swe574.backend.devcomReborn.community.CommunityRole;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberRoleAssignmentDTO {
    private Long userId;
    private CommunityRole newRole;
}
