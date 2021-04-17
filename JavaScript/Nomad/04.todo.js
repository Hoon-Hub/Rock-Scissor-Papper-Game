const toDoForm =document.querySelector(".js-toDoForm"),
    toDoInput = toDoForm.querySelector("input"),
    toDoList = document.querySelector(".js-toDoList");
toDoList.style

const TODOS_LS = 'toDos';

let toDos = [];

function deleteToDo(event){
    const btn = event.target;
    const li = btn.parentNode;
    toDoList.removeChild(li);
    const cleanToDos = toDos.filter((toDo) => { //filter 로 클릭한 객체 한개를 제와한 나머지를 불러옴
        return toDo.id !== parseInt(li.id); //number = string error
    });
    toDos = cleanToDos;
    saveToDos();
}

function saveToDos(){   //object Object 로 뜨게 되는데 이유 : js 는 String만 저장이 가능.
    localStorage.setItem(TODOS_LS, JSON.stringify(toDos));  // 그래서 json 형태로 저장
}


function paintToDo(text){
    const li = document.createElement("li");
    const deleteBtn = document.createElement("button");
    const span = document.createElement("span");
    const newId = toDos.length + 1;


    deleteBtn.innerText='❌';
    deleteBtn.addEventListener("click",deleteToDo);
    span.innerText = text ;

    li.appendChild(deleteBtn);  // x버튼
    li.appendChild(span);   // 작성한 내용
    li.id = newId;
    toDoList.appendChild(li);
    li.style.listStyle = 'none';

    // array에 저장하기
    const toDoObj = {
        text: text,
        id: newId
    }
    toDos.push(toDoObj);

    saveToDos();
}

function handleSubmit(event){
    event.preventDefault();
    const currentValue = toDoInput.value;
    paintToDo(currentValue);
    toDoInput.value="";
}



function loadToDos(){
    const loadedTodos = localStorage.getItem(TODOS_LS);
    if(loadedTodos  !== null){
        //불러온 값이 string 이기 때문에 object 형태로 변환
        const parsedToDos = JSON.parse(loadedTodos);
        parsedToDos.forEach((toDo) => {
            paintToDo(toDo.text);
        })
    }
}

    function init(){
        loadToDos();
        toDoForm.addEventListener("submit",handleSubmit);
    }

    init();