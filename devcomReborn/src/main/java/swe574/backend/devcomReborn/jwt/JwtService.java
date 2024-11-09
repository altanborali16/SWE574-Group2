package swe574.backend.devcomReborn.jwt;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import swe574.backend.devcomReborn.user.User;
import io.jsonwebtoken.*;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.stereotype.Service;
import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

@Service
public class JwtService {

//    @Value("${application.security.jwt.secret-key}")
//    private String secretKey;
    public Logger logger = LoggerFactory.getLogger(JwtService.class);

    private final String secretKey="bXlzZWNyZXRrZXlteXNlY3JldGtleW15c2VjcmV0a2V5";

    public String extractEmail(String token) {
        String email= extractClaim(token,Claims::getSubject);
        logger.info("tokenized email: "+email);
        return email;
    }

    public String generateToken(User userDetails) {
        return generateToken(new HashMap<>(), userDetails);
    }

    public String generateToken(Map<String,Object> moreClaims, User userDetails){
        moreClaims.put("userId",userDetails.getId());
        return Jwts.builder().setClaims(moreClaims).setSubject(userDetails.getEmail())
                .setIssuedAt(new Date(System.currentTimeMillis()))
                .setExpiration(new Date(System.currentTimeMillis()+ 86400000))
                .signWith(getSignInKey(), SignatureAlgorithm.HS256)
                .compact();

    }
    private Claims extractAllClaims (String token){
        return Jwts.parserBuilder().setSigningKey(getSignInKey()).build().parseClaimsJws(token)
                .getBody();
    }
    public <T> T extractClaim(String token, Function<Claims,T> claimExtractor){
        final Claims claims= extractAllClaims(token);
        return claimExtractor.apply(claims);
    }

    private Key getSignInKey() {
        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
        return Keys.hmacShaKeyFor(keyBytes);
    }

    public boolean isTokenValid(String token, User userDetails) {
        String email = extractEmail(token);
        return (email.equals(userDetails.getEmail())) && !isTokenExpired(token);
    }

    public boolean isTokenExpired(String token){
        return extractClaim(token,Claims::getExpiration).before(new Date(System.currentTimeMillis()));
    }


}
