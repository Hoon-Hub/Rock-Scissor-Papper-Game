// splice 배열에서 특정 항목을 제거

const numbers = [10, 20, 30, 40];
const index = numbers.indexOf(30);
console.log(index); //2

const spliced = numbers.splice(index,1);    //index으로부터 n개를 지우겠다.
console.log(spliced);
console.log(numbers);

// slice : 기존의 배열을 건드리지 않음

const sliced = numbers.slice(0,2);  // 0에서부터 2번전까지 
console.log(sliced);
console.log(numbers);

