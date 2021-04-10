// 1. String concatenation
console.log('my'+'cat');
console.log('1' + 2);
console.log(`string literals : 1 + 2 = ${1+2}`);


// 2. 수학 연산자
console.log(2 ** 3); // 2의 3제곱


// 3. 전위연산자 후위연산자 
let counter = 2;
const preIncrement = ++counter;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// counter = counter + 1
// preIncrement = counter;

const postIncrement = counter ++;
console.log(`preIncrement: ${preIncrement}, counter: ${counter}`);
// preIncrement = counter +1 


// 4. 논리연산자
// ||, &&, !
const value1 = false;
const value2 = 4 < 2;

// or
console.log(`or: ${value1 || value2 || check()}`);

// and
console.log(`or: ${value1 && value2 && check()}`);
// if(nullableObject != null) nullableObject.something;

function check(){   //이렇게 무거운 연산하는 것을 마지막에 사용하는 것을 권장
    for(let i = 0; i<10; i++){
        console.log('맥-주!');
    }
    return true;
}

// not
console.log(!value1);


// Equality : variable
const stringFive = '5';
const numberFive = 5;

//loose equyality - 타입 변환 비교
console.log(stringFive == numberFive);  //t
console.log(stringFive != numberFive);  //f

// strict equality - 타입 변환 x 비교 (권장)
console.log(stringFive === numberFive);  //f
console.log(stringFive !== numberFive);  //t

// 객체 equality by reference
const hoon1 = {name:'hoon'};
const hoon2 = {name:'hoon'};
const hoon3 = hoon1;
console.log(hoon1 == hoon2);    //f
console.log(hoon1 === hoon2);   //f
console.log(hoon1 === hoon3);   //t

//------------------------------------
//8. if => ternary operator : ?
console.log(name==='hoon' ? 'yes' : 'no');


// 9. do while : 블럭을 먼저 실행하고 싶을 때 사용
let i =3;
do{
    console.log(`do while : ${i}`);
    i --;
}while(i>0);



// 10. for 



