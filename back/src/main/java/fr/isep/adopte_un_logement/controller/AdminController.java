package fr.isep.adopte_un_logement.controller;

import fr.isep.adopte_un_logement.dto.UserDTO;
import fr.isep.adopte_un_logement.dto.UserUpdateDTO;
import fr.isep.adopte_un_logement.entities.Role;
import fr.isep.adopte_un_logement.entities.User;
import fr.isep.adopte_un_logement.mapper.UserMapper;
import fr.isep.adopte_un_logement.model.ERole;
import fr.isep.adopte_un_logement.service.RoleService;
import fr.isep.adopte_un_logement.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;


@PreAuthorize("hasAuthority('ADMIN')")
@RequestMapping("/admin")
@RestController
@AllArgsConstructor
public class AdminController {

    private UserMapper userMapper;
    private UserService userService;

    private RoleService roleService;

    private PasswordEncoder encoder;

    @GetMapping("/user/count")
    public ResponseEntity<Long> getUserCount(){
        return ResponseEntity.ok(this.userService.getUsersCount());
    }

    @GetMapping("/user/list")
    public ResponseEntity<List<UserDTO>> getUsers(Pageable pageable){
        return ResponseEntity.ok(this.userMapper.toDTO(this.userService.getUsers(pageable)));
    }

    @PostMapping("/user/update")
    public HttpStatus updateUser(@RequestBody UserUpdateDTO update){
        if(update.getPassword() != null){
            update.setPassword(encoder.encode(update.getPassword()));
        }

        Optional<User> userOpt = this.userService.getUser(update.getId());
        if(userOpt.isPresent()){
            User user = userOpt.get();
            this.userMapper.updateEntity(update, user);

            List<Role> roles = update.getRoles().stream().map(ERole::valueOf).map(roleService::findByName).collect(Collectors.toList());

            user.setRoles(roles);

            this.userService.updateUser(user);
            return HttpStatus.OK;
        }
        return HttpStatus.NOT_FOUND;
    }

    @PostMapping("/user/delete")
    public HttpStatus deleteUser(@RequestBody String userId){
        Optional<User> userOpt = this.userService.getUser(userId);
        if(userOpt.isPresent()){
            this.userService.deleteUser(userOpt.get());
            return HttpStatus.OK;
        }
        return HttpStatus.NOT_FOUND;
    }

}
