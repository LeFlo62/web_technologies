package fr.isep.adopte_un_logement.controller;

import fr.isep.adopte_un_logement.dto.HousingCreationDTO;
import fr.isep.adopte_un_logement.dto.HousingDTO;
import fr.isep.adopte_un_logement.dto.HousingListItemDTO;
import fr.isep.adopte_un_logement.entities.Housing;
import fr.isep.adopte_un_logement.mapper.HousingMapper;
import fr.isep.adopte_un_logement.service.HousingService;
import fr.isep.adopte_un_logement.service.ImageService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RequestMapping("/housing")
@RestController
@AllArgsConstructor
public class HousingController {

    private HousingService housingService;
    private HousingMapper housingMapper;
    private ImageService imageService;

    @GetMapping("/list")
    public ResponseEntity<List<HousingListItemDTO>> getHousingListPaginated(Pageable pageable) {
        return ResponseEntity.ok(housingMapper.toDTO(housingService.getHousingListPaginated(pageable).getContent()));
    }

    @PostMapping("/create")
    public ResponseEntity<Void> createHousing(HousingCreationDTO housingCreationDTO) {
        Housing housing = housingMapper.toEntity(housingCreationDTO);

        List<UUID> images = imageService.uploadImages(housingCreationDTO.getImages());

        housing.setImages(images);
        housingService.createHousing(housing);
        return ResponseEntity.ok().build();
    }

    @GetMapping("/{id}")
    public ResponseEntity<HousingDTO> getHousingById(@PathVariable("id") String id) {
        return ResponseEntity.ok(housingMapper.toHousingDTO(housingService.getHousingById(UUID.fromString(id))));
    }
}
