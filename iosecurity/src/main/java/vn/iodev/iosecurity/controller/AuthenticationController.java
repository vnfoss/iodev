package vn.iodev.iosecurity.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.extern.slf4j.Slf4j;
import vn.iodev.iosecurity.model.IOUserDetails;
import vn.iodev.iosecurity.payload.LoginRequest;
import vn.iodev.iosecurity.payload.LoginResponse;
import vn.iodev.iosecurity.repository.TaiKhoanRepository;
import vn.iodev.iosecurity.repository.VaiTroRepository;
import vn.iodev.iosecurity.utils.JwtUtils;

@RestController
@RequestMapping("/api")
@Slf4j
public class AuthenticationController {
    @Autowired
    AuthenticationManager authenticationManager;

    @Autowired
    VaiTroRepository vaiTroRepository;

    @Autowired
    TaiKhoanRepository taiKhoanRepository;

    @Autowired
    private JwtUtils jwtUtils;

    @PostMapping("/authenticate")
    public LoginResponse authenticateUser(@RequestBody LoginRequest loginRequest) {
        log.info("Username: " + loginRequest.getUsername() + "," + loginRequest.getPassword());
        Authentication authentication = authenticationManager.authenticate(
                new UsernamePasswordAuthenticationToken(
                        loginRequest.getUsername(),
                        loginRequest.getPassword()
                )
        );
        SecurityContextHolder.getContext().setAuthentication(authentication);
        String jwt = jwtUtils.generateJwtToken(authentication);

        IOUserDetails userDetails = (IOUserDetails) authentication.getPrincipal();		
		List<String> vaiTros = userDetails.getAuthorities().stream()
				.map(item -> item.getAuthority())
				.collect(Collectors.toList());

        return new LoginResponse(jwt, vaiTros);
    }
}
