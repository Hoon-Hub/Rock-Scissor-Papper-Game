'use strict';

{
    const title = document.getElementById("title");

    const BASE_COLOR = 'rgb(52, 73, 94)';
    const OTHER_COLOR = '#9b59b6';

    function handleClick(){
        const currentColor = title.style.color;
        if(currentColor === BASE_COLOR){
            title.style.color = OTHER_COLOR;
        }else{
            title.style.color = BASE_COLOR;
        }
    }

    function init(){
        title.style.color = BASE_COLOR;
        title.addEventListener('click', handleClick);
    }
    init();
}


{
    //네트워크 연결에 따른 콘솔 로그 출력
    function handleOffline(){
        console.log('handle offline');
    }

    function handleOnline(){
        console.log('handle Online');
    }
    window.addEventListener('offline', handleOffline);
    window.addEventListener('online', handleOnline);


}

{
    /**
     * 
     * prompt는 예전에 사용하던 api. 현재는 잘 사용하지 않음
    const age = prompt('how old are you?');
    console.log(age);
    if(age > 22){
        console.log('you can drink');
    }else{
        console.log('you can-t drink');
    }
     */
}