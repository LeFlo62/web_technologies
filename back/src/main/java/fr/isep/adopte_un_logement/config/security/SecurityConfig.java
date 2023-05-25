package fr.isep.adopte_un_logement.config.security;

import lombok.Getter;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;

@Getter
@Configuration
@PropertySource("security.yml")
public class SecurityConfig {

    @Value("{secret_key}")
    public String secret;
    @Value("{expiration_time}")
    public long expirationTime;
    @Value("{token_prefix}")
    public String tokenPrefix;
    @Value("{header_string}")
    public String headerString;
    @Value("{sign_up_url}")
    public String signUpURL;
    @Value("{public_links}")
    private String[] publicLinks;

}
