package fr.isep.adopte_un_logement.repositories;

import fr.isep.adopte_un_logement.entities.Housing;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface HousingRepository extends JpaRepository<Housing, UUID> {
}
