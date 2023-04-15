package fr.isep.adopte_un_logement.controller;

import fr.isep.adopte_un_logement.entities.Image;
import fr.isep.adopte_un_logement.service.ImageService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.core.io.Resource;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.UUID;

@RequestMapping("/image")
@RestController
public class ImageController {

    private ImageService imageService;

    @Autowired
    public ImageController(ImageService imageService) {
        this.imageService = imageService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<Resource> getImage(@PathVariable("id") String id) {
        Optional<Image> imageOpt = imageService.getImage(UUID.fromString(id));
        if(imageOpt.isPresent()){
            return ResponseEntity.ok().body(new ByteArrayResource(imageOpt.get().getContent()));
        }
        return ResponseEntity.notFound().build();
    }

}
