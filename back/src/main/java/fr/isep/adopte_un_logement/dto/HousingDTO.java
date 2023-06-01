package fr.isep.adopte_un_logement.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

import java.util.List;

@Getter @Setter @Builder
public class HousingDTO {
    private String id;
    private String title;
    private List<String> images;
    private float rating;
    private String services;
    private String constraints;
    private String housingDescription;
    private String landlordDescription;
    private String reviews;

}
