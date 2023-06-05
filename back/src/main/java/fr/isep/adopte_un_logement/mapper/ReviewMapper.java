package fr.isep.adopte_un_logement.mapper;

import fr.isep.adopte_un_logement.dto.ReviewAverageDTO;
import fr.isep.adopte_un_logement.dto.ReviewCreationDTO;
import fr.isep.adopte_un_logement.dto.ReviewDTO;
import fr.isep.adopte_un_logement.entities.Review;
import fr.isep.adopte_un_logement.model.ReviewAverage;
import org.mapstruct.Mapper;

import java.util.List;

@Mapper(componentModel = "spring")
public interface ReviewMapper {

    ReviewDTO toDTO(Review review);

    List<ReviewDTO> toDTOList(List<Review> reviews);

    Review toEntity(ReviewCreationDTO reviewDTO);

    ReviewAverageDTO toDTOAverage(ReviewAverage reviewAverageDTO);

    List<ReviewAverageDTO> toDTOAverageList(List<ReviewAverage> reviewAverageDTO);

}