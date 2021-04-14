'use strict';

// 비동기 코드를 깔끔하게 처리하기

// promise object : async await 
// 1. state (상태) : 프로젝트의 현 상태 
//      state : pending -> fulfilled or rejected
// 2. producer와 consumer를 이해하기


// 1. Producer : 비동기적으로 실행하는 promise
// when new Promise is created, the executor runs automactically.
const promise = new Promise((resolve, reject) => {
    // 무거운 작업을 함 (NETWORK, READ FILES)
    console.log('doing something');
    setTimeout(()=> {
        resolve('sanghoon');
        // reject(new Error('no network'));
    }, 2000);
});


// 2. Consumers : then, catch, finally
// promise가 정상적으로 작동했을 때
promise
.then((value) => {
    console.log(value); // sanghoon (resolve  =>  value )
}) // promise 가 작동하지 않았을 때 
.catch(error => {
    console.log(error);
})
.finally(() => {console.log('finally')});



// 3. Promise chaining

const fetchNumber = new Promise((resolve, reject) => {
    setTimeout(() => resolve(1), 1000);
});

fetchNumber
.then(num => num * 2)
.then(num => num * 3)
.then(num =>{
    return new Promise((resolve, reject) => {
        setTimeout(() => resolve(num - 1), 1000);
    });
})
.then(num => console.log(num));


// 4. Error Handling
const getHen = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => resolve('CHICKEN'), 1000);
});
const getEgg = hen =>
    new Promise((resolve, reject) => {
        setTimeout(() => reject(new Error(`error! ${hen} => EGG`)), 1000);
    }
);
const cook = egg =>
    new Promise((resolve, reject) => {
        setTimeout(() => resolve(`${egg} => FRI PAN`), 1000);
    });

getHen()    //
.then(getEgg)
.then(cook)
.then(console.log)
.catch(console.log);