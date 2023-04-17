package fr.isep.adopte_un_logement.controller;

import fr.isep.adopte_un_logement.dto.UserDTO;
import fr.isep.adopte_un_logement.mapper.UserMapper;
import fr.isep.adopte_un_logement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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

    @PostMapping("/register")
    public HttpStatus register(UserDTO userDTO) {
        //TODO use reCaptcha
        userService.createUser(userMapper.toEntity(userDTO));
        return HttpStatus.OK;
    }

}
