package com.example.objectmapper;
import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
class ObjectMapperApplicationTests {

    @Test
    void contextLoads() throws JsonProcessingException {
        System.out.println("-------------");

        // Text JSON -> Object
        // Object -> Text JSON

        // controllder req json(text) -> object
        // response object -> json(text)
        var obejctMapper = new ObjectMapper();

        var user = new User("sanghoon", 10, "010-1111-2222");

        var text = obejctMapper.writeValueAsString(user);
        System.out.println(text);

        // text->object
        var objectUser = obejctMapper.readValue(text, User.class);
        System.out.println(objectUser);
    }

}
