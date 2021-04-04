//shift : 첫번째원소를 배열에서 추출해줌
const numbers = [10, 20, 30, 40];
const value = numbers.shift();  //누적이 되기에 여러 번 하면 배열이 한개씩 삭제 됨.
console.log(value);
console.log(numbers);

// unshift : 맨 앞에 파라미터를 추가함.
numbers.unshift(5); 
console.log(numbers);


//-------------------------------


// pop : shift와 비슷 마지막원소를 배열에서 추출

const value2 = numbers.pop();
console.log(value2);
console.log(numbers);


// push : 맨 뒤에 파라미터를 추가함
numbers.push(50);
console.log(numbers);
