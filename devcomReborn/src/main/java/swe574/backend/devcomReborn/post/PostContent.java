package swe574.backend.devcomReborn.post;

import com.fasterxml.jackson.annotation.JsonBackReference;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import swe574.backend.devcomReborn.template.Field;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="post_contents")
public class PostContent {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column
    private String value;

    @ManyToOne
    @JoinColumn(name = "post_id",nullable = false)
    @JsonBackReference("post-contents")
    private Post post;

    @ManyToOne
    @JoinColumn(name = "data_field_id",nullable = false)
    private Field field;
}
