package swe574.backend.devcomReborn.community;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import swe574.backend.devcomReborn.user.User;

import java.util.List;
import java.util.Optional;

public interface CommunityRepository extends JpaRepository<Community,Long> {
    Optional<Community> findByName(String name);

    @Query(value = """
            SELECT com
            FROM Community com
            WHERE com IN (
                SELECT DISTINCT c
                FROM Community c, Community target
                WHERE target IN (
                    SELECT p.community
                    FROM Post p
                    WHERE :user MEMBER OF p.voters
                )
                AND c != target
                AND EXISTS (
                    SELECT t
                    FROM target.tags t
                    WHERE t MEMBER OF c.tags
                )
            )
            AND NOT EXISTS (
                SELECT m
                FROM Membership m
                WHERE m.community = com
                AND m.user = :user
            )
            AND com.isPrivate = false
            """)
    List<Community> findRecommendedCommunities(@Param("user") User user);

    List<Community> findByIsPrivateFalse();
}