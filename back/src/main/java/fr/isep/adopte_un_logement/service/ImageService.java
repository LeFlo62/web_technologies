package fr.isep.adopte_un_logement.service;

import fr.isep.adopte_un_logement.controller.ImageController;
import fr.isep.adopte_un_logement.entities.Image;
import fr.isep.adopte_un_logement.repositories.ImageRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;
import java.util.UUID;

@Service
public class ImageService {

    private ImageRepository imageRepository;

    @Autowired
    public ImageService(ImageRepository imageRepository) {
        this.imageRepository = imageRepository;
    }

    public Optional<Image> getImage(UUID id) {
        return imageRepository.findById(id);
    }

}
