// 스프레드 연산자

//object
const obj1 = {key: 'key1'};
const obj2 = {key: 'key2'};
const array = [obj1, obj2];

// array copy
const arrayCopy = [...array] ;
console.log(array);
console.log(arrayCopy);

const arrayCopy2 = [...array, {key: 'key3'}];
console.log(arrayCopy2);
// ... : object의 주소값을 가져옴 / 실제로는 동일한 object
obj1.key = 'newKey';

console.log(array, arrayCopy, arrayCopy2);


// object copy 
const obj3 = {...obj1};
console.log(obj3);

// array concatenation   배열 병합
const fruits1 = ['peach','strawberry'];
const fruits2 = ['bannana','apple'];
const fruits3 = [...fruits1, ...fruits2];
console.log(fruits3);


// object merge  오브젝트 병합
const dog1 = {dog: 'puppy'};
const dog2 = {dog: 'doggy'};    // 동일한 키를 가지고 있는 object인 경우 값을 덮어씌워 1개의 결과가 출력됨.
const dog = {...dog1, ...dog2};
console.log(dog);
