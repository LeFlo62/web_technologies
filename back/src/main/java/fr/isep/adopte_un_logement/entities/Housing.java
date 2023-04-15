package fr.isep.adopte_un_logement.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.List;
import java.util.UUID;

@Table
@Entity
@Getter @Setter @Builder
@NoArgsConstructor
@AllArgsConstructor
public class Housing {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO, generator = "UUID")
    private UUID id;

    private String title;

    @ManyToOne
    private User author;

    private float rating = 0;

    @OneToMany(orphanRemoval = true)
    @JoinColumn(name = "housing_id")
    private List<Image> images;

    private String description;

    private String address;
}
