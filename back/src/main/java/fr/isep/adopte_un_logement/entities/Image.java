package fr.isep.adopte_un_logement.entities;

import jakarta.persistence.*;
import jakarta.transaction.Transactional;
import lombok.*;

import java.util.UUID;

import static jakarta.persistence.FetchType.LAZY;

@Table
@Entity
@Getter @Setter @Builder
@NoArgsConstructor
@AllArgsConstructor
public class Image {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private UUID id;

    @Lob @Basic(fetch=LAZY)
    private byte[] content;
}
