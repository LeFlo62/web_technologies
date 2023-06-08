package fr.isep.adopte_un_logement.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@Builder
public class ReviewCreationDTO {

    private String authorId;

    private String housingId;

    private String content;

    private float rating = 0;

    private long time;

}
