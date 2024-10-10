package community.users;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.UuidGenerator;

@Entity(name = "USERS")
@AllArgsConstructor
@NoArgsConstructor
@Data
public class User {
    @Id
    @UuidGenerator
    private String id;
    private String fullName;
    private String email;
    private String password;
}