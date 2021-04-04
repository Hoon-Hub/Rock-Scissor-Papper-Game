package com.fastcampus.jpa.bookmanager.domain;

import lombok.*;

import java.time.LocalDateTime;

//@Data 가 아래의 어노테이션을 확장해줌.
//@Getter
//@Setter //Lombock을 이용한 getter setter 생성하기
//@ToString   //Lombok을 이용해 toString() 을 대체할 수 있음

@NoArgsConstructor  // 생성자1     : 인자없이 생성가능하게 됨.
@AllArgsConstructor //생성자2      : 객체가 가진 모든 인자들을 받아서 생성가능하게 됨.
@RequiredArgsConstructor //생성자3 : 특정 값은 있고, 특정값은 없어도 됨.
@EqualsAndHashCode  // 추가 부분 jpa에서는 생략 하겠음.
@Data       // Entity data를 사용하면서 가장 많이 사용할 것.
@Builder    // AllArgsContstructor과 비슷
public class User {
    @NonNull
    private String name;
    @NonNull
    private String email;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;


}
//Refator > DeLombok / Lombok을 통해 쪼개거나 다시 합칠 수 있다.

