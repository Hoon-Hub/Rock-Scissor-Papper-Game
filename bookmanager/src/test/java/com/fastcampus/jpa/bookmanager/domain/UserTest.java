package com.fastcampus.jpa.bookmanager.domain;

import org.junit.jupiter.api.Test;

import java.time.LocalDateTime;

import static org.junit.jupiter.api.Assertions.*;

class UserTest {
    @Test
    void test(){
        User user = new User();
        user.setEmail("gwi01304@naver.com");
        user.setName("Sanghoon");
        System.out.println(">>> "+user.toString());


        User user1 = new User("sanghoon","gwi01304@naver.com", LocalDateTime.now(), LocalDateTime.now());
        User user2 = new User("sanghoon","gwi01304@naver.com");

        // builder Annotation 사용
        User user3 = User.builder()
                .name("hoon")
                .email("gwi01304@naver.com")
                .build();


        System.out.println(">>> "+user1.toString());
        System.out.println(">>> "+user2.toString());
        System.out.println(">>> "+user3.toString());


    }
}