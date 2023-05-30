package fr.isep.adopte_un_logement.mapper;

import fr.isep.adopte_un_logement.dto.UserCreationDTO;
import fr.isep.adopte_un_logement.dto.UserDTO;
import fr.isep.adopte_un_logement.entities.User;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.stream.Collectors;

@Component
public class UserMapper {
    public User toEntity(UserDTO userDTO) {
        return User.builder()
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .email(userDTO.getEmail())
                .build();
    }

    public User toEntity(UserCreationDTO userDTO) {
        return User.builder()
                .firstName(userDTO.getFirstName())
                .lastName(userDTO.getLastName())
                .email(userDTO.getEmail())
                .password(userDTO.getPassword())
                .build();
    }

    public UserDTO toDTO(User user) {
        return UserDTO.builder()
                .firstName(user.getFirstName())
                .lastName(user.getLastName())
                .email(user.getEmail())
                .build();
    }

    public List<UserDTO> toDTO(List<User> entities){
        return entities.stream().map(this::toDTO).collect(Collectors.toList());
    }
}
