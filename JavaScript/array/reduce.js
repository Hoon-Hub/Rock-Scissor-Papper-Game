// 배열이 주어졌을 때 배열 안의 모든 값들을 사용하여 어떠한 값을 연산할 때 사용

const numbers = [1,2,3,4,5];

//모든 원소의 총합을 구하기
let sum = 0;
numbers.forEach(n => {
    sum += n;
})
console.log(sum);

//
const sum2 = numbers.reduce((accumulator, current) => accumulator + current, 0);
// accumulator = 기본값=0 
console.log(sum2);

//평균 구하기
const sum3 = numbers.reduce((accumulator, current, index, array) => {
    if( index === array.length - 1){
        return (accumulator + current ) / array.length;
    }else{
        return accumulator + current;
    }
    }, 0);
console.log(sum3);