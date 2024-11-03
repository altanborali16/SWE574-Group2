package swe574.backend.devcomReborn.template;

import org.springframework.data.jpa.repository.JpaRepository;
import java.util.List;

public interface FieldRepository extends JpaRepository<Field,Long> {
    List<Field> findByTemplate(Template template);
}
