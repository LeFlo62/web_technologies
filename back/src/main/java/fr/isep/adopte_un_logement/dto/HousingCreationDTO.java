package fr.isep.adopte_un_logement.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;
import org.springframework.web.multipart.MultipartFile;

@Getter @Setter @Builder
public class HousingCreationDTO {

    private String title;

    private String authorId;

    private MultipartFile[] images;

    private String description;

    private String address;

    private String[] services;

    private String[] constraints;
}
