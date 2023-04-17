package fr.isep.adopte_un_logement.dto;

import lombok.Builder;
import lombok.Getter;
import lombok.Setter;

@Getter @Setter @Builder
public class UserDTO {

    private String firstName;

    private String lastName;

    private String email;

}
