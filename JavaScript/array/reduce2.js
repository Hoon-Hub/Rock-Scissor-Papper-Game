const alpahbets = ['a','a','a','b','b','b','c','c','d','e'];

const counts = alpahbets.reduce((acc, current) => {
    if(acc[current]){
        acc[current] += 1;
    }else{
        acc[current] = 1;
    }
    return acc;
}, {});
console.log(counts);

// 1. 기본값 : 비어있는 객체 { }
// 2. a값이 없으니 a = 1;
// 3. a값이 있으니 a = 2;
// 4. a값이 있으니 a = 3;
// 5. b값이 없으니 b = 1;
// 6. b값이 있으니 b = 2;
// . . . 
//결과 : { a: 3, b: 3, c: 2, d: 1, e: 1 }