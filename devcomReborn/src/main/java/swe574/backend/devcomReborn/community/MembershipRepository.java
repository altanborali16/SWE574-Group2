package swe574.backend.devcomReborn.community;

import org.springframework.data.jpa.repository.JpaRepository;
import swe574.backend.devcomReborn.user.User;

import java.util.List;
import java.util.Optional;


public interface MembershipRepository  extends JpaRepository<Membership, MembershipCode> {
    List<Membership> findByUser(User user);
    //Optional<Membership> findByUser(User user);
    List<Membership> findByCommunity(Community community);
    long countByUserId(Long userId);

}

