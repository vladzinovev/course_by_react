// lesson 65 (setTimeout, setInterval)
"use strict"

//вызывается через определенный промежуток времени один раз
const timerId = setTimeout(function(){
    console.log('Hello');
}, 2000);
//или
const timerId2 = setTimeout(function(text){
    console.log(text);
}, 2000, 'Hello');
//или
const timerId3 = setTimeout(logger, 2000);
function logger(){
    console.log('Hello');
}

//останавливаем наш таймер
clearInterval(timerId);



window.addEventListener('DOMContentLoaded',()=>{

const btn = document.querySelector('.btn');
let timerId;
let i = 0;

btn.addEventListener('click', ()=>{
    //const timerId = setTimeout(logger, 2000);
    //вызывется постоянно через определенный промежуток времен
    timerId = setTimeout(logger, 2000);
});
clearInterval(timerId);
function logger(){
    if(i===4){
        clearInterval(timerId);
    }
    console.log('Hello');
    i++;
}

//рекурсивный вызов setTimeout
let id = setTimeout(function log(){
    console.log('Hello');
    id = setTimeout(log,500);
},500);


function myAnimation(){
    const elem = document.querySelector('.box');
    let pos = 0;

    const id = setTimeout(frame,10);
    
    function frame(){
        if (pos == 300){
            clearInterval(id);
        } else {
            pos++;
            elem.style.top = pos + "px";
            elem.style.left=pos +"px";
        }
    }
}
btn.addEventListener('clock',myAnimation);
});