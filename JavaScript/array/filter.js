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
console.log(todos);
// 기존의 배열을 건드리지 않고 새로운 배열 만들기 filter 기능
const tasksNotDone = todos.filter(todo => !todo.done);
console.log(tasksNotDone);

const taskHaveDone = todos.filter(todo => todo.id > 1 && todo.done);

console.log(taskHaveDone);