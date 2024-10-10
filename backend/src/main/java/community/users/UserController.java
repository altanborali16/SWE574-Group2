package community.users;

import community.config.security.JwtProvider;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequestMapping("/auth")
@AllArgsConstructor
public class UserController {
    private final UserRepository userRepository;
    private final PasswordEncoder passwordEncoder;
    private final UserDetailsServiceImpl customUserDetails;


    @PostMapping("/signup")
    public ResponseEntity<AuthResponse> createUserHandler(@RequestBody User user) {
        String email = user.getEmail();
        String password = user.getPassword();
        String fullName = user.getFullName();

        User isEmailExist = userRepository.findByEmail(email);
        if (isEmailExist != null) {
            //throw new Exception("Email Is Already Used With Another Account");
        }
        User createdUser = new User();
        createdUser.setEmail(email);
        createdUser.setFullName(fullName);
        createdUser.setPassword(passwordEncoder.encode(password));

        User savedUser = userRepository.save(createdUser);
        userRepository.save(savedUser);
        Authentication authentication = new UsernamePasswordAuthenticationToken(email, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String token = JwtProvider.generateToken(authentication);

        AuthResponse authResponse = new AuthResponse();
        authResponse.setJwt(token);
        authResponse.setMessage("Register Success");
        authResponse.setStatus(true);
        return new ResponseEntity<AuthResponse>(authResponse, HttpStatus.OK);
    }


    @PostMapping("/signin")
    public ResponseEntity<AuthResponse> signin(@RequestBody User loginRequest) {
        String username = loginRequest.getEmail();
        String password = loginRequest.getPassword();

        log.info(username + "-------" + password);

        Authentication authentication = authenticate(username, password);
        SecurityContextHolder.getContext().setAuthentication(authentication);

        String token = JwtProvider.generateToken(authentication);
        AuthResponse authResponse = new AuthResponse();

        authResponse.setMessage("Login success");
        authResponse.setJwt(token);
        authResponse.setStatus(true);

        return new ResponseEntity<>(authResponse, HttpStatus.OK);
    }

    private Authentication authenticate(String username, String password) {
        log.info(username + "---++----" + password);
        UserDetails userDetails = customUserDetails.loadUserByUsername(username);
        log.info("Sig in in user details" + userDetails);

        if (userDetails == null) {
            log.info("Sign in details - null" + userDetails);
            throw new BadCredentialsException("Invalid username and password");
        }
        if (!passwordEncoder.matches(password, userDetails.getPassword())) {
            log.info("Sign in userDetails - password mismatch" + userDetails);
            throw new BadCredentialsException("Invalid password");
        }
        return new UsernamePasswordAuthenticationToken(userDetails, null, userDetails.getAuthorities());
    }
}
