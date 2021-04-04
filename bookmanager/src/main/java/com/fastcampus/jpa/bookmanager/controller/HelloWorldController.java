package com.fastcampus.jpa.bookmanager.controller;


import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController //restapi의 요청을 받을 수 있음
public class HelloWorldController {

    @GetMapping("/hello-world")
    public String helloWorld(){
        return "hello-world";
    }
}
