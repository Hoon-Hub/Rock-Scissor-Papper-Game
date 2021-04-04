//concat : 여러개의 배열을 하나로 합침 

const arr1 = [1,2,3];
const arr2 = [4,5,6];

const concated = arr1.concat(arr2);

    // spread 연산자 
    // = const concated = [...arr1, ...arr2];

console.log(concated);
// 기존의 배열을 건드리지 않음.
console.log(arr1);
console.log(arr2);


//--------------------
// join :배열의 원소 사이를 규정

const array = [1,2,3,4,5];
console.log(array.join(', '));