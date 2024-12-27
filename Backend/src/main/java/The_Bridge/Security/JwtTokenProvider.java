package The_Bridge.Security;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import jakarta.servlet.http.HttpServletRequest;

import org.springframework.stereotype.Component;

import java.util.Date;

@Component
public class JwtTokenProvider {

    private final String SECRET_KEY = "s3cr3tK3yV3ryL0ngAndC0mpl3x";  // Use a strong secret key

    // Method to generate JWT token
    @SuppressWarnings("deprecation")
	public String generateToken(String username) {
        Date now = new Date();
        Date expirationDate = new Date(now.getTime() + 86400000); // 1 day expiration

        return Jwts.builder()
                .setSubject(username)
                .setIssuedAt(now)
                .setExpiration(expirationDate)
                .signWith(SignatureAlgorithm.HS512, SECRET_KEY)
                .compact();
    }

    // Method to extract username from JWT token
    public String getUsernameFromToken(String token) {
        @SuppressWarnings("deprecation")
		Claims claims = Jwts.parser()
                .setSigningKey(SECRET_KEY)
                .parseClaimsJws(token)
                .getBody();
        return claims.getSubject();
    }

    // Method to validate JWT token
    public boolean validateToken(String token) {
        try {
            @SuppressWarnings("deprecation")
			Claims claims = Jwts.parser()
                    .setSigningKey(SECRET_KEY)
                    .parseClaimsJws(token)
                    .getBody();
            return !claims.getExpiration().before(new Date());
        } catch (Exception e) {
            return false;
        }
    }

    // Method to resolve token from the HTTP request (Authorization header)
    public String resolveToken(HttpServletRequest request) {
        String bearerToken = request.getHeader("Authorization");
        if (bearerToken != null && bearerToken.startsWith("Bearer ")) {
            return bearerToken.substring(7);
        }
        return null;
    }
}
