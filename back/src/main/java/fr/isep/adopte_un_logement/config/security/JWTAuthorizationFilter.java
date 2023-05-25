package fr.isep.adopte_un_logement.config.security;

import com.auth0.jwt.JWT;
import com.auth0.jwt.algorithms.Algorithm;
import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;

import java.io.IOException;
import java.util.ArrayList;

public class JWTAuthorizationFilter extends BasicAuthenticationFilter {

    private SecurityConfig securityConfig;

    public JWTAuthorizationFilter(AuthenticationManager authManager, SecurityConfig securityConfig) {
        super(authManager);
        this.securityConfig = securityConfig;
    }


    @Override
    protected void doFilterInternal(HttpServletRequest req, HttpServletResponse res, FilterChain chain) throws IOException, ServletException {
        String header = req.getHeader(securityConfig.getHeaderString());

        if (header == null || !header.startsWith(securityConfig.getTokenPrefix())) {
            chain.doFilter(req, res);
            return;
        }

        UsernamePasswordAuthenticationToken authentication = getAuthentication(req);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        chain.doFilter(req, res);
    }

    // Reads the JWT from the Authorization header, and then uses JWT to validate the token
    private UsernamePasswordAuthenticationToken getAuthentication(HttpServletRequest request) {
        String token = request.getHeader(securityConfig.getHeaderString());

        if (token != null) {
            // parse the token.
            String email = JWT.require(Algorithm.HMAC512(securityConfig.getSecret().getBytes()))
                    .build()
                    .verify(token.replace(securityConfig.getTokenPrefix(), ""))
                    .getSubject();

            if (email != null) {
                // new arraylist means authorities
                return new UsernamePasswordAuthenticationToken(email, null, new ArrayList<>());
            }

            return null;
        }

        return null;
    }
}