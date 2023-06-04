package fr.isep.adopte_un_logement.model;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @Builder
public class ReviewAverage {

    private String housingId;
    private float averageRating;

}
