package fr.isep.adopte_un_logement.service;

import fr.isep.adopte_un_logement.entities.Housing;
import fr.isep.adopte_un_logement.repositories.HousingRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class HousingService {

    private HousingRepository housingRepository;

    @Autowired
    public HousingService(HousingRepository housingRepository) {
        this.housingRepository = housingRepository;
    }

    public List<Housing> getHousingList() {
        return housingRepository.findAll();
    }

    public Housing getHousingById(UUID id) {
        return housingRepository.findById(id).orElse(null);
    }

    public void deleteHousing(UUID id) {
        housingRepository.deleteById(id);
    }

    public void updateHousing(Housing toEntity) {
        housingRepository.save(toEntity);
    }

    public Page<Housing> getHousingListPaginated(Pageable pageable) {
        return housingRepository.findAll(pageable);
    }

    public void createHousing(Housing entity) {
        housingRepository.save(entity);
    }
}
