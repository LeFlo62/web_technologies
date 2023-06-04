package fr.isep.adopte_un_logement.service;

import fr.isep.adopte_un_logement.entities.Review;
import fr.isep.adopte_un_logement.model.ReviewAverage;
import fr.isep.adopte_un_logement.repositories.ReviewRepository;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
@AllArgsConstructor
public class ReviewService {

    private ReviewRepository reviewRepository;

    public Review createReview(Review review) {
        return reviewRepository.save(review);
    }

    public List<Review> getReviewListByHousingId(String housingId, Pageable pageable) {
        return reviewRepository.findAllByHousingId(UUID.fromString(housingId), pageable).getContent();
    }

    public float getAverageRatingByHousingId(String housingId) {
        return reviewRepository.getAverageRatingByHousingId(UUID.fromString(housingId));
    }

    public List<ReviewAverage> getAverageRatingByHousingIds(List<String> housingIds) {
        return reviewRepository.getAverageRatingByHousingIds(housingIds.stream().map(UUID::fromString).toList());
    }

}
