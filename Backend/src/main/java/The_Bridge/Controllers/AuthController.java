package The_Bridge.Controllers;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import The_Bridge.Entities.User;
import The_Bridge.Repositories.UserRepository;





import java.util.Base64;
import java.util.Date;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final String jwtSecret = Base64.getEncoder().encodeToString("s3cr3tK3yV3ryL0ngAndC0mpl3x".getBytes());

    @Autowired
    private UserRepository userRepository;

    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody AuthRequest loginRequest) {
        String username = loginRequest.getUsername();
        String password = loginRequest.getPassword();

        // Recherche d'abord un utilisateur avec cet email
        Optional<User> userOptional = userRepository.findByUsername(username);
        if (userOptional.isPresent() && password.equals(userOptional.get().getPassword())) {
            User user = userOptional.get();
            String token = generateToken(user.getEmail(), user);
            return ResponseEntity.ok(new AuthResponse(token));
        }

        return ResponseEntity.status(HttpStatus.UNAUTHORIZED).body("Unauthorized");
    }

    // Génération du token JWT
    @SuppressWarnings("deprecation")
	private String generateToken(String email, User user) {
        String role = user.getRole();  // Prendre le rôle de l'utilisateur
        String userId = String.valueOf(user.getId());
        System.out.println("Role in JWT: " + role);
        return Jwts.builder()
            .setSubject(email)
            .claim("role", role)
            .claim("id", userId)
            .setIssuedAt(new Date())
            .setExpiration(new Date(System.currentTimeMillis() + 5000 * 60 * 60)) 
            .signWith(SignatureAlgorithm.HS512, jwtSecret)
            .compact();
    }

    // Classe de réponse contenant le token JWT
    public static class AuthResponse {
        private String token;

        public AuthResponse(String token) {
            this.token = token;
        }

        public String getToken() {
            return token;
        }
    }

    // Classe représentant la requête de login
    public static class AuthRequest {
        private String email;
        private String password;

        public String getEmail() {
            return email;
        }

        public String getUsername() {
			// TODO Auto-generated method stub
			return null;
		}

		public void setEmail(String email) {
            this.email = email;
        }

        public String getPassword() {
            return password;
        }

        public void setPassword(String password) {
            this.password = password;
        }
    }
}
