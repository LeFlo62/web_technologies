package fr.isep.adopte_un_logement.controller;

import fr.isep.adopte_un_logement.dto.HousingCreationDTO;
import fr.isep.adopte_un_logement.dto.HousingListItemDTO;
import fr.isep.adopte_un_logement.entities.Housing;
import fr.isep.adopte_un_logement.mapper.HousingMapper;
import fr.isep.adopte_un_logement.service.HousingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RequestMapping("/housing")
@RestController
public class HousingController {

    private HousingService housingService;
    private HousingMapper housingMapper;

    @Autowired
    private HousingController(HousingService housingService, HousingMapper housingMapper) {
        this.housingService = housingService;
        this.housingMapper = housingMapper;
    }

    @GetMapping("/list")
    public ResponseEntity<List<HousingListItemDTO>> getHousingList() {
        return ResponseEntity.ok(housingMapper.toDTO(housingService.getHousingList()));
    }

    @PostMapping("/create")
    public ResponseEntity<Void> createHousing(HousingCreationDTO housingCreationDTO) {
        Housing housing = housingMapper.toEntity(housingCreationDTO);
        System.out.println(housingCreationDTO.getTitle());
        System.out.println(housing.getTitle());
        housingService.createHousing(housing);
        return ResponseEntity.ok().build();
    }

}
