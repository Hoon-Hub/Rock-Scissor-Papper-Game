'use strict';


// 1. Object => Json
// stringfy(obj)
let json = JSON.stringify(true);
console.log(json);

json = JSON.stringify(['apple', 'bannana']);
console.log(json);

const rabbit = {
    name: 'tori',
    color: 'white',
    size: null,
    birthDate: new Date(),
    jump: () => {
        console.log(`${this.name} can jump!!`);
    },
};
json = JSON.stringify(rabbit);
console.log(json);

json = JSON.stringify(rabbit, ["name", "color", "size"]);
console.log(json);

json = JSON.stringify(rabbit, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    return key === 'name' ? 'sanghoon' : value;
});
console.log(json);

// 2. Json => Object
// parse(json)
console.clear();

json = JSON.stringify(rabbit);
console.log(json);
const obj = JSON.parse(json, (key, value) => {
    console.log(`key: ${key}, value: ${value}`);
    // return value;
    return key === 'birthDate' ? new Date(value) : value;
});
console.log(obj);
rabbit.jump();
// json으로 변환했을 때 함수는 포함되지 않았음 -> jump method가 포함되지 않음.
//obj.jump();  

console.log(rabbit.birthDate.getDate());

// obj.birthDate.getDate() => error / string type 이기 때문
// console.log(obj.birthDate);
console.log(obj.birthDate.getDate());
