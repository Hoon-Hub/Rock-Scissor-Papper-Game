
const obj1 = {};
const obj2 = new Object();

function print(person){
    console.log(person.name);
    console.log(person.age);
}

const sanghoon = {name: 'sanghoon', age: 4};
print(sanghoon);

// object 에 추가   : 다른 언어에서는 흔한 일이 아님
sanghoon.hasJob = true;     //avoid 해야하긴 함
console.log(sanghoon);

delete sanghoon.hasJob;
console.log(sanghoon);


// Computed properties
console.log(sanghoon.name);
console.log(sanghoon['name']);

sanghoon['hasJob'] = false;
console.log(sanghoon);


function printValue(obj, key){
    console.log(obj[key]);
}
printValue(sanghoon,'name');    //undefined



// Property value shorthand
const person1 = { name : 'bob', age: 2};
const person2 = { name : 'John', age: 5};
const person3 = { name : 'Steave', age: 3};
const person4 = new Person('sanghoon',30);
console.log(person4);

// Constructor Property
function Person(name, age){
    this.name = name;
    this.age = age;
}


// In operator
console.log('name' in sanghoon);    //true
console.log('age' in sanghoon);    //true
console.log('random' in sanghoon);    //false
console.log(sanghoon.radom);    //undefined


console.clear();
// for in vs for of
// for (key in obj)
for(key in sanghoon){
    console.log(key);
}

// for (value of iterable)
const array = [1,2,3,4];
for(let i = 0 ; i < array.length; i++){
    console.log(array[i]);
}

for(value of array){
    console.log(value);
}



// cloning
const user = {name: 'sanghoon', age: '20'};
const user2 = user;

user2.name = 'coder';
console.log(user);

// 구식방법 (x)
const user3 = {};
for ( key in user){
    user3[key] = user[key];
}
console.log(user3);


// 신식 방법 (o)
    // object assign 
const user4 = Object.assign({}, user);
console.log(user4);

// another example
const fruit1 = {color:  'red'};
const fruit2 = {color:  'blue', size:'big'};
const fruit3 = {color: 'black', size:'small', scent:'gross'};
const mixed = Object.assign({}, fruit1, fruit2, fruit3);        // 덮어쓰기 개념이기 때문에 red가 아닌 blue가 출력된다.
console.log(mixed);
console.log(mixed.color);
console.log(mixed.size);

