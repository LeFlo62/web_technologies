package fr.isep.adopte_un_logement.mapper;

import fr.isep.adopte_un_logement.config.ApplicationConfig;
import fr.isep.adopte_un_logement.dto.HousingCreationDTO;
import fr.isep.adopte_un_logement.dto.HousingListItemDTO;
import fr.isep.adopte_un_logement.entities.Housing;
import fr.isep.adopte_un_logement.entities.Image;
import fr.isep.adopte_un_logement.entities.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.transaction.annotation.Transactional;

import java.io.IOException;
import java.util.Arrays;
import java.util.UUID;

@Component
public class HousingMapper implements EntityToDTOMapper<Housing, HousingListItemDTO>, DTOtoEntityMapper<Housing, HousingCreationDTO>{

    private final ApplicationConfig applicationConfig;

    @Autowired
    public HousingMapper(ApplicationConfig applicationConfig) {
        this.applicationConfig = applicationConfig;
    }

    @Override @Transactional(readOnly = true)
    public HousingListItemDTO toDTO(Housing housing) {
        return HousingListItemDTO.builder()
                .id(housing.getId().toString())
                .title(housing.getTitle())
                .authorName(housing.getAuthor().getFirstName() + " " + housing.getAuthor().getLastName())
                .rating(housing.getRating())
                .image(applicationConfig.getApiUrl() + "image/" + housing.getImages().get(0))
                .build();
    }

    @Override
    public Housing toEntity(HousingCreationDTO housingCreationDTO) {
        return Housing.builder()
                .title(housingCreationDTO.getTitle())
                .description(housingCreationDTO.getDescription())
                .address(housingCreationDTO.getAddress())
                .author(User.builder().id(UUID.fromString(housingCreationDTO.getAuthorId())).build())
                .build();
    }
}
