package fr.isep.adopte_un_logement.mapper;

import fr.isep.adopte_un_logement.dto.UserDTO;
import fr.isep.adopte_un_logement.entities.User;
import org.springframework.stereotype.Component;

@Component
public class UserMapper implements DTOMapper<User, UserDTO> {
    @Override
    public User toEntity(UserDTO userDTO) {
        return User.builder()
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .email(userDTO.getEmail())
                .build();
    }

    @Override
    public UserDTO toDTO(User user) {
        return UserDTO.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .build();
    }
}
