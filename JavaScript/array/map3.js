//배열에서 원하는 항목이 어디에 있는지 알아보기

// 1. indexOf

const superheros = ['아이언맨','캡틴아메리카','토르','닥터스트레인지'];

const index = superheros.indexOf('토르');
console.log(index); //2

const index2 = superheros.indexOf('닥터스트레인지');
console.log(index2); //3



// 2. findIndex     : 조건으로 찾기에 유리 

const todos = [
    {
        id:1,
        text:'자바스크립트 입문',
        done: true
    },
    {
        id:2,
        text:'함수 배우기',
        done:true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done:true
    },
    {
        id: 4,
        text: '배열 내장 함수 배우기',
        done:false
    }
];

const index3 = todos.indexOf(3);
console.log(index3);    //존재하지 않을 때 -1

const index4 = todos.findIndex(todo => todo.id === 3);
console.log(index4);    // 특수한 조건에 대해서 해당하는 존재가 몇번째에 있는지 찾기


// 3. find : 찾은 값을 반환
const index5 = todos.find(todo => todo.id === 3);
console.log(index5);

const todo = todos.find(todo => todo.done === false);   
console.log(todo);  //객체 자체를 반환 한다.



