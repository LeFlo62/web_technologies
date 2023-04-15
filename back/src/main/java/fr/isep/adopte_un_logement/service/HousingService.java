package fr.isep.adopte_un_logement.service;

import fr.isep.adopte_un_logement.entities.Housing;
import fr.isep.adopte_un_logement.entities.Image;
import fr.isep.adopte_un_logement.repositories.HousingRepository;
import fr.isep.adopte_un_logement.repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HousingService {

    private ImageRepository imageRepository;
    private HousingRepository housingRepository;

    @Autowired
    public HousingService(HousingRepository housingRepository, ImageRepository imageRepository) {
        this.housingRepository = housingRepository;
        this.imageRepository = imageRepository;
    }

    public List<Housing> getHousingList() {
        return housingRepository.findAll();
    }

    public void createHousing(Housing toEntity) {
        imageRepository.saveAll(toEntity.getImages());
        housingRepository.save(toEntity);
    }
}
