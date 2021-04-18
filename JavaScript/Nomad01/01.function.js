'use strict';

{
    function sayHello(name = 'sanghoon', age = 25){
    return `Hello! ${name} you have ${age} years of age.`;
    }

    const greetSanghoon = sayHello('sanghoon', 123);    // console.log 로 return 한 것이 아니기 때문에 출력 없음.

    console.log(greetSanghoon);

}

{
    const calculator = {
        plus : function (a , b){
            return a + b;
        },
        minus : function (a, b){
            return a - b;
        },
        multiple : function (a, b){
            return a * b;
        },
        divide : function (a, b){
            return a / b;
        }
    }


    const plus = calculator.plus(5,5);
    const minus = calculator.minus(4,2);
    const multiple = calculator.multiple(2,6);
    const divide = calculator.divide(12,4);
    console.log(plus);
    console.log(minus);
    console.log(multiple);
    console.log(divide);
    

}