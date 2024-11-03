package swe574.backend.devcomReborn.template;

import org.springframework.data.jpa.repository.JpaRepository;
import swe574.backend.devcomReborn.community.Community;

import java.util.List;
import java.util.Optional;

public interface TemplateRepository extends JpaRepository<Template,Long> {
    List<Template> findByCommunity(Community community);
}
