'use strict';

{
    const title = document.getElementById("title");
    const CLICKED_CLASS = "clicked";

    function handleClick(){
        // const hasClass = title.classList.contains(CLICKED_CLASS);
        // if(hasClass){
        //     title.classList.remove(CLICKED_CLASS);
        // }else{
        //     title.classList.add(CLICKED_CLASS);
        // }

        //toggle은 위의 코드를 한줄로 만들어준다.
        title.classList.toggle(CLICKED_CLASS);
    }

    function init(){
        title.addEventListener('click', handleClick);
    }
    init();
}