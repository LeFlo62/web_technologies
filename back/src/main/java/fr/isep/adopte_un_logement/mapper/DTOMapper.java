package fr.isep.adopte_un_logement.mapper;

import java.util.List;
import java.util.stream.Collectors;

public interface DTOMapper<ENTITY, DTO> extends DTOtoEntityMapper<ENTITY, DTO>, EntityToDTOMapper<ENTITY, DTO> {

}
