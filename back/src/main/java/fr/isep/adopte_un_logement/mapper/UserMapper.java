package fr.isep.adopte_un_logement.mapper;

import fr.isep.adopte_un_logement.dto.UserCreationDTO;
import fr.isep.adopte_un_logement.dto.UserDTO;
import fr.isep.adopte_un_logement.dto.UserUpdateDTO;
import fr.isep.adopte_un_logement.entities.Role;
import fr.isep.adopte_un_logement.entities.User;
import org.mapstruct.BeanMapping;
import org.mapstruct.Mapper;
import org.mapstruct.MappingTarget;
import org.mapstruct.NullValuePropertyMappingStrategy;

import java.util.List;

@Mapper(componentModel = "spring")
public interface UserMapper {

    Role toEntity(String value);

    List<Role> toEntity(List<String> value);

    String toDTORole(Role value);
    List<String> toDTORoles(List<Role> value);

    User toEntity(UserDTO userDTO);

    @BeanMapping(nullValuePropertyMappingStrategy = NullValuePropertyMappingStrategy.IGNORE)
    void updateEntity(UserUpdateDTO dto, @MappingTarget User user);

    User toEntity(UserCreationDTO userDTO);
    UserDTO toDTO(User user);
    List<UserDTO> toDTO(List<User> entities);

}
