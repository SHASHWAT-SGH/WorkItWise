package com.backend.workitwise.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController()
@RequestMapping("/test/v1")
public class TestController {
    @GetMapping("/hidden")
    public String hidden(){
        return "Hidden Page! You are authenticated!";
    }
}
