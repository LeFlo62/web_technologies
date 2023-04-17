package fr.isep.adopte_un_logement.dto;

import fr.isep.adopte_un_logement.entities.Image;
import fr.isep.adopte_un_logement.entities.User;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToMany;
import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;

@Getter @Setter @Builder
public class HousingCreationDTO {

    private String title;

    private String authorId;

    private MultipartFile[] images;

    private String description;

    private String address;
}
