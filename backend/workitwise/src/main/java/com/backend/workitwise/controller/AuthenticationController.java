package com.backend.workitwise.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/auth/v1")
public class AuthenticationController {
    @GetMapping("/login")
    public String login(){
        return "login page";
    }

    @PostMapping("/signup")
    public String signup(){
        return "signup page";
    }
}
