package fr.isep.adopte_un_logement.controller;

import fr.isep.adopte_un_logement.config.security.JwtUtils;
import fr.isep.adopte_un_logement.dto.LoginRequestDTO;
import fr.isep.adopte_un_logement.dto.LoginResponseDTO;
import fr.isep.adopte_un_logement.dto.UserCreationDTO;
import fr.isep.adopte_un_logement.mapper.UserMapper;
import fr.isep.adopte_un_logement.model.UserDetailsImpl;
import fr.isep.adopte_un_logement.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@CrossOrigin(origins = "*", maxAge = 3600)
@RestController
@RequestMapping("/auth")
public class AuthController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    private UserService userService;

    @Autowired
    private UserMapper userMapper;

    @Autowired
    PasswordEncoder encoder;

    @Autowired
    JwtUtils jwtUtils;

    @PostMapping("/login")
    public ResponseEntity<LoginResponseDTO> authenticateUser(@RequestBody LoginRequestDTO loginRequest) {
        Authentication authentication = authenticationManager
                .authenticate(new UsernamePasswordAuthenticationToken(loginRequest.getEmail(), loginRequest.getPassword()));

        SecurityContextHolder.getContext().setAuthentication(authentication);

        UserDetailsImpl userDetails = (UserDetailsImpl) authentication.getPrincipal();

        String jwt = jwtUtils.generateJwtToken(authentication);

        List<String> roles = userDetails.getAuthorities().stream()
                .map(item -> item.getAuthority())
                .collect(Collectors.toList());

        return ResponseEntity.ok(new LoginResponseDTO(jwt,
                        userDetails.getId().toString(),
                        userDetails.getFirstName(),
                        userDetails.getLastName(),
                        userDetails.getEmail(),
                        roles));
    }

    @PostMapping("/register")
    public ResponseEntity<String> registerUser(@RequestBody UserCreationDTO userCreationDTO) {
        if (userService.existsByEmail(userCreationDTO.getEmail())) {
            return ResponseEntity.badRequest().body("Error: Email is already taken!");
        }
        userCreationDTO.setPassword(encoder.encode(userCreationDTO.getPassword()));
        userService.createUser(userMapper.toEntity(userCreationDTO));

        return ResponseEntity.ok("User registered successfully!");
    }
}
