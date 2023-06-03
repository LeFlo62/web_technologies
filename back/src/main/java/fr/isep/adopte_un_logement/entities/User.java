package fr.isep.adopte_un_logement.entities;

import jakarta.persistence.*;
import lombok.*;

import java.util.*;

@Table(name = "users", uniqueConstraints = @UniqueConstraint(columnNames = "email"))
@Entity
@Getter @Setter @Builder
@NoArgsConstructor @AllArgsConstructor
@ToString
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    private String firstName;

    private String lastName;

    private String email;

    private String password;

    @OneToMany(mappedBy = "author", orphanRemoval = true)
    private List<Housing> housings;

    @ManyToMany(fetch = FetchType.EAGER)
    @JoinTable(name = "user_roles",
            joinColumns = @JoinColumn(name = "user_id"),
            inverseJoinColumns = @JoinColumn(name = "role_id"))
    private List<Role> roles = new ArrayList<>();

}
