//https://www.youtube.com/watch?v=OCCpGh4ujb8&list=PLv2d7VI9OotTVOL4QmPfvJWPJvkmv6h-2&index=3

// vanila javascript 를 만들때 먼저 선언해주는 것이 좋다.
    // javascript는 유연하기 때문
        // 선언되지 않은 변수에 값을 할당 등 비상식적인 행동이 가능함.
         // added ECMAScript 5
'use strict';

console.log('hello world');

let a;  // 아래 이미지 선언 참고.
a =6;


// 2. variable 
// 변수, 변경될 수 있는 값
// let (added in ES6)
{
   //block scope
    let name = 'sanghoon';
    console.log(name);
    name = 'hello';
    console.log(name);
}
// console.log(name);
// block scope을 사용하면 외부에서 사용할 수 없다.
// console.log(name); 

// var 는 이제 사용되지 않음
   //선언 전 값 할당, 추가, 할당이 가능함. 
//var hoisting  : 어디에 선언한 것에 상관없이 선언을 가장 위로 끌어올려놓는 것을 의미
// block scope 을 무시함ㅊ
{
age = 4 ;
var age ;
}
console.log(age);


// 3. constants
// 값 할당 후에 변경이 불가능
// thread safety,  immutable data type , security , 재개발시 실수 방지
const daysInWeek = 7;
const maxNumber = 5;
//daysInWeek = 5; //오류 이미지 참고


// 4. variable types
// primitive, single item : number, string, boolean, null, undefind, symbol
// object, box container
// function, first-class function

// javascript에서는 number라고 선언해줄 필요가 없음 + int, float 등 가릴 필요가 없음 
// typescript에서는 number라고 선언해줘야함.

// NaN = Not a Number 
const infinity = 1 / 0 ;
const negativeInfinity = -1 / 0 ;
const nAn = 'not a number' / 2 ;
console.log(infinity);
console.log(negativeInfinity);
console.log(nAn);

// bigInt라는 타입이 있음
const bigInt = 12311242342134123213123123213123213n;
// 끝에 n을 붙이면 됨 : chrome 등에서만 됨.
console.log(`value: ${bigInt}, type: ${typeof bigInt}`);


// null, undefind
let x;
console.log(`value: ${x}, type:${typeof x}`);

// symbol
// 동시다발적으로 일어날 수 있는 상황에서 고유한 식별자로 사용
const symbol1 = Symbol('id');
const symbol2 = Symbol('id');   // 동일한 symbol을 사용해도 다른 결과가 나타남
console.log(symbol1 === symbol2); //false

//동일한 고유 식별자로 설정하기
const gSymbol1 = Symbol.for('id');
const gSymbol2 = Symbol.for('id');
console.log(gSymbol1 === gSymbol2); //true
console.log(`value: ${gSymbol1.description}, type:${typeof gSymbol1}`);



// object , 일상 생활에서 볼 수 있는 구조
const hoon = {name:'sh', age:20};   //변경이 불가능한 객체(구조)
hoon.age = 21;  //내부는 수정이 가능함.(데이터)

console.log(hoon);



// 5. Dynamic typing : dynamically typed language = 유동적인 언어
// C. java : static typed language
    
let text = 'hello';
console.log(text.charAt(0));    //h
console.log(`value : ${text}, type: ${typeof text}`);
text = 1;
console.log(`value : ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value : ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value : ${text}, type: ${typeof text}`);
text = '124';
console.log(text.charAt(0));    //error
    // 주의해야함. => type script 에서 개선됐음. 
