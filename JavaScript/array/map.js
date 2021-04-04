const array = [1,2,3,4,5,6,7,8];

const squared = [];
array.forEach(n => {
    squared.push(n * n);
});

console.log(squared);


const square = n => n * n;
const squared2 = array.map(square);

console.log(squared2);


const squared3 = array.map(n => n * n);
console.log(squared3);
