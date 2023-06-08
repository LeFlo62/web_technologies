package fr.isep.adopte_un_logement.mapper;

import fr.isep.adopte_un_logement.dto.ReviewAverageDTO;
import fr.isep.adopte_un_logement.dto.ReviewCreationDTO;
import fr.isep.adopte_un_logement.dto.ReviewDTO;
import fr.isep.adopte_un_logement.entities.Housing;
import fr.isep.adopte_un_logement.entities.Review;
import fr.isep.adopte_un_logement.entities.User;
import fr.isep.adopte_un_logement.model.ReviewAverage;
import org.mapstruct.Mapper;

import java.util.List;
import java.util.UUID;

@Mapper(componentModel = "spring")
public interface ReviewMapper {

    ReviewDTO toDTO(Review review);

    List<ReviewDTO> toDTOList(List<Review> reviews);
    default Housing toEntityHousing(String id) {
        return Housing.builder().id(UUID.fromString(id)).build();
    }
    default User toEntityUser(String id) {
        return User.builder().id(UUID.fromString(id)).build();
    }
    Review toEntity(ReviewCreationDTO reviewDTO);

    ReviewAverageDTO toDTOAverage(ReviewAverage reviewAverageDTO);

    List<ReviewAverageDTO> toDTOAverageList(List<ReviewAverage> reviewAverageDTO);

}
