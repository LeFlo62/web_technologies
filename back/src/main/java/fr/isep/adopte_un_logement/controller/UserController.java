package fr.isep.adopte_un_logement.controller;

import fr.isep.adopte_un_logement.dto.UserDTO;
import fr.isep.adopte_un_logement.entities.User;
import fr.isep.adopte_un_logement.mapper.UserMapper;
import fr.isep.adopte_un_logement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;

@RequestMapping("/user")
@RestController
public class UserController {

    private UserMapper userMapper;
    private UserService userService;

    @Autowired
    public UserController(UserMapper userMapper, UserService userService) {
        this.userMapper = userMapper;
        this.userService = userService;
    }

    @GetMapping("/{id}")
    public ResponseEntity<UserDTO> getUser(@PathVariable("id") String id){
        Optional<User> userOpt = this.userService.getUser(id);
        if(userOpt.isPresent()){
            return ResponseEntity.ok(this.userMapper.toDTO(userOpt.get()));
        }
        return ResponseEntity.notFound().build();
    }

}
