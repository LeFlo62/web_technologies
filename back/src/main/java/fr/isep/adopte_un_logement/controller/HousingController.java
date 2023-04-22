package fr.isep.adopte_un_logement.controller;

import fr.isep.adopte_un_logement.dto.HousingCreationDTO;
import fr.isep.adopte_un_logement.dto.HousingListItemDTO;
import fr.isep.adopte_un_logement.entities.Housing;
import fr.isep.adopte_un_logement.mapper.HousingMapper;
import fr.isep.adopte_un_logement.service.HousingService;
import fr.isep.adopte_un_logement.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;
import java.util.UUID;

@RequestMapping("/housing")
@RestController
public class HousingController {

    private HousingService housingService;
    private HousingMapper housingMapper;
    private ImageService imageService;

    @Autowired
    private HousingController(HousingService housingService, HousingMapper housingMapper, ImageService imageService) {
        this.housingService = housingService;
        this.housingMapper = housingMapper;
        this.imageService = imageService;
    }

    @GetMapping("/list")
    public ResponseEntity<List<HousingListItemDTO>> getHousingList() {
        return ResponseEntity.ok(housingMapper.toDTO(housingService.getHousingList()));
    }

    @GetMapping("/list/paginated")
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

}
