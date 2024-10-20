package swe574.backend.devcomReborn.auth;

import lombok.RequiredArgsConstructor;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import swe574.backend.devcomReborn.jwt.JwtService;
import swe574.backend.devcomReborn.user.User;
import swe574.backend.devcomReborn.user.UserRepository;
import org.springframework.security.authentication.AuthenticationManager;

@Service
@RequiredArgsConstructor
public class AuthenticationService {
    private final UserRepository userRepository;
    private final JwtService jwtService;
    private final BCryptPasswordEncoder passwordEncoder;
    private final AuthenticationManager authenticationManager;
    public RegisterResponse register(RegisterRequest request) {
        User user= User.builder().username(request.getUsername())
                .password(passwordEncoder.encode(request.getPassword()))
                .email(request.getEmail())
                .firstname(request.getFirstname())
                .lastname(request.getLastname())
                .build();
        var registeredUser = userRepository.save(user);
        var jwtToken = jwtService.generateToken(user);

        return RegisterResponse.builder()
                .accessToken(jwtToken)
                .registerMessage("The user is registered, user id =" + registeredUser.getId().toString())
                .build();
    }

    public AuthenticationResponse authenticate(AuthenticationRequest request){
        authenticationManager.authenticate(new UsernamePasswordAuthenticationToken(request.getEmail(),request.getPassword()));
        User user =userRepository.findByEmail(request.getEmail()).orElseThrow(()-> new UsernameNotFoundException("User not found"));
        return AuthenticationResponse.builder().token(jwtService.generateToken(user)).build();

    }

}
