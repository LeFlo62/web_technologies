package fr.isep.adopte_un_logement;

import fr.isep.adopte_un_logement.entities.Role;
import fr.isep.adopte_un_logement.model.ERole;
import fr.isep.adopte_un_logement.repositories.RoleRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.context.ApplicationListener;
import org.springframework.context.event.ContextRefreshedEvent;
import org.springframework.stereotype.Component;

@RequiredArgsConstructor
@Component
public class SetupDataLoader implements ApplicationListener<ContextRefreshedEvent> {

    private boolean alreadySetup = false;

    private final RoleRepository roleRepository;

    @Override
    public void onApplicationEvent(ContextRefreshedEvent event) {
        if(alreadySetup)
            return;

        for(ERole role : ERole.values()){
            createRoleIfNotFound(role);
        }

        alreadySetup = true;
    }

    private void createRoleIfNotFound(ERole name){
        if(roleRepository.findByName(name).isEmpty()){
            Role r = new Role();
            r.setName(name);
            roleRepository.save(r);
        }
    }

}
