/// Arrow function
// === annonimous function 일때만 사용 가능함.

const simplePrint = () => console.log('simplePrint');
const add = (a,b) => a+b;
const add0 = function(a,b){return a+b;};

simplePrint();
console.log(add(1,2));
console.log(add0(1,2));



//IIFE : Immediately Invoked Function Expression
// 선언함과 동시에 호출하고 싶다면
(
    function hello(){
        console.log('IIFE');
    }
)();