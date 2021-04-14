'use strict';

// JavaScript is synchronous.
// 동기적 언어이다.
// hoisting : var, function declaration 등을 가장 위로 위치하게 하는 것.


// Synchronous call back : 즉각적
function printImmediately(print){
    print();
}

// Asynchronous call back : 유예
function printWithDelay(print, timeout){
    setTimeout(print, timeout);
}


console.log('1');
// 1. 비동기
setTimeout(() => console.log('2'), 1000);
console.log('3');
printImmediately(() => console.log('hello'));
// 2. 동기
printWithDelay(() => console.log('async callback'), 2000);



// callback hellgate Open
class UserStorage{
    loginUser(id, password, onSuccess, onError){
        setTimeout(() => {
            if(
                (id === 'sanghoon' && password === '1234') ||
                (id === 'coder' && password === 'academy')
            ){
                onSuccess(id);
            } else {
                onError(new Error('not found'));
            }
        },2000);
    }

    getRoles(user, onSuccess, onError){
        setTimeout(()=>{
            if(user === 'sanghoon'){
                onSuccess({name: 'sanghoon', role:'admin'});
            }else{
                onError(new Error('no access'));
            }
        },1000);

    }
}

// 콜백지옥 : 가시성↓ , 에러 및 디버깅이 어려움 
// 1. 사용자에게 아이디와 비밀번호를 입력받기
// 2. login 
// 3. 아이디를 다시 받아옴
// 4. Roles 를 요청 -> 받아옴
// 5. 사용자의 object 획득

const userStorage = new UserStorage();
const id = prompt('enter your id');
const password = prompt('enter your password');
userStorage.loginUser(
    id, 
    password, 
    user => {
        userStorage.getRoles(
            user,
            userWithRole => {
                alert(`
                    Hello ${userWithRole.name}, you have a ${userWithRole.role} role`
                );
            },
            error => {
                console.log(error);
            }
        );
    },
    error => {
        console.log(error)
    }

);
