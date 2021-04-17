'use strict';

{
const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector("h1");

function getTime(){
    const date = new Date();
    const minute = date.getMinutes();
    const hours = date.getHours();
    const seconds = date.getSeconds();

    // 비동기화로 만들고 싶음 : set Interval
    clockTitle.innerText = `${
        hours < 10 ? `0${hours}` : hours
    }:${
        minute < 10 ? `0${minute}` : minute
    }:${
        seconds < 10 ? `0${seconds}` : seconds 
    } `; 
    //삼항연산자로 .string으로 변환
    


}


function init(){
    getTime();
    setInterval(getTime, 1000); // set interval로 1초 간격으로 변경
}


init();


}
