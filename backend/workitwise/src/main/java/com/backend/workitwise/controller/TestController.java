package com.backend.workitwise.controller;

import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/test/v1")
public class TestController {
    @GetMapping("/hidden")
    public String hidden(Authentication authentication){
        System.out.println("isAuthenticated " + authentication.isAuthenticated());
        System.out.println("getAuthorities " + authentication.getAuthorities());
        System.out.println("getCredentials " + authentication.getCredentials());
        System.out.println("getPrincipal " + authentication.getPrincipal());
        System.out.println("getDetails " + authentication.getDetails());
        return "Hidden Page! You are authenticated!";
    }
}
