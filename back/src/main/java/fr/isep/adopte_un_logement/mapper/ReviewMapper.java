package fr.isep.adopte_un_logement.mapper;

import fr.isep.adopte_un_logement.dto.ReviewAverageDTO;
import fr.isep.adopte_un_logement.dto.ReviewCreationDTO;
import fr.isep.adopte_un_logement.dto.ReviewDTO;
import fr.isep.adopte_un_logement.entities.Housing;
import fr.isep.adopte_un_logement.entities.Review;
import fr.isep.adopte_un_logement.entities.User;
import fr.isep.adopte_un_logement.model.ReviewAverage;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
public class ReviewMapper {

    public ReviewDTO toDTO(Review review){
        return ReviewDTO.builder()
                .id(review.getId().toString())
                .authorId(review.getAuthor().toString())
                .housingId(review.getHousing().toString())
                .rating(review.getRating())
                .content(review.getContent())
                .time(review.getTime())
                .build();
    }

    public List<ReviewDTO> toDTOList(List<Review> reviewListByHousingId) {
        return reviewListByHousingId.stream().map(this::toDTO).collect(Collectors.toList());
    }

    public Review toEntity(ReviewCreationDTO reviewDTO) {
        return Review.builder()
                .author(User.builder().id(UUID.fromString(reviewDTO.getAuthorId())).build())
                .housing(Housing.builder().id(UUID.fromString(reviewDTO.getHousingId())).build())
                .rating(reviewDTO.getRating())
                .content(reviewDTO.getContent())
                .build();
    }

    public ReviewAverageDTO toDTO(ReviewAverage reviewAverage) {
        return ReviewAverageDTO.builder()
                .housingId(reviewAverage.getHousingId().toString())
                .rating(reviewAverage.getRating())
                .build();
    }

    public List<ReviewAverageDTO> toDTOAverageList(List<ReviewAverage> list) {
        return list.stream().map(this::toDTO).collect(Collectors.toList());
    }
}
