package com.example.hello.controller;

import com.example.hello.dto.UserRequest;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.context.annotation.RequestScope;

import java.util.Map;

@RestController
@RequestMapping("/api/get")
public class GetApiController {

    @GetMapping(path="/hello") // http://localhost:8080/api/get/hello
    public String Hello(){
        return "get Hello";
    }
    
    // get, post, put, delete 모두 작동되기때문에 method를 지정. 
    @RequestMapping(path="/hi", method= RequestMethod.GET) // http:/localhost:8080/api/get/hi
    public String hi() {
        return "hi";
    }

    //path Variable
    //http://localhost:8080/api/get/path-variable/{name}
    @GetMapping("/path-variable/{name}")
    public String pathVariable(@PathVariable(name= "name") String pathName){  //mapping 안의 name 과 Pathvariable 의 name 을 일치시켜줘야한다.
        System.out.println("PathVariable : "+pathName);
        return pathName;
    }

    //query parameter
    // 검색을 할 때 여러가지 매개변수 인자.
    // ex) ?a=12414
    // &b=12431r
    // &b=12431r

    // ?key=value&key2=value
    //http://localhost:8080/api/get/query-param?user=jin&email=gwi01304@naver.com&age=28
    @GetMapping(path="query-param")
    public String queryParam(@RequestParam Map<String, String> queryParam){

        StringBuilder sb = new StringBuilder();

        queryParam.entrySet().forEach(entry->{
            System.out.println(entry.getKey());
            System.out.println(entry.getValue());
            System.out.println("\n");

            sb.append(entry.getKey()+" = "+entry.getValue()+"\n");
        });
        return sb.toString();
    }

    // http://localhost:8080/api/get/query-param02?name=상훈&email=gwi01304@naver.com&age=12
    @GetMapping("query-param02")
    public String queryParam02( //명시적인 변수를 받아서 보고 싶다면.
            @RequestParam String name,
            @RequestParam String email,
            @RequestParam int age
    ){
        System.out.println(name+" "+email+" "+age);

        return name+" "+email+" "+age;
    }

    // 권장 : 객체를 활용 / 가장 많이 씀.
    // http://localhost:8080/api/get/query-param02?name=상훈&email=gwi01304@naver.com&age=12
    @GetMapping("query-param03")
    public String queryParam03(UserRequest userRequest){
        System.out.println(userRequest.getName());
        System.out.println(userRequest.getEmail());
        System.out.println(userRequest.getAge());

        return userRequest.toString();
    }
}
