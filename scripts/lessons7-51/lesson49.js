// lesson 49 (events on mobile devices)
"use strict";

//touchstart  когда коснулись пальцем элемента
//touchmove   когда после косания элемент начинает двигаться
//touchmove   когда палец оторвался от элемента
//touchenter  когда палец c эл достиг определенной области
//touchleave  когда палец ушел за пределы эл
//touchleave  когда палец ушел за пределы экрана

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    
    //нажал пальцем
    box.addEventListener('touchstart',(e)=>{
        e.preventDefault();
        console.log('start');
        console.log(e.touches); //информация о пальце(ах) коснувшемся
    });

    //водим по эл пальцем
    box.addEventListener('touchmove',(e)=>{
        e.preventDefault();
        console.log('move');
    });

    //вотпустил палец
    box.addEventListener('touchend',(e)=>{
        e.preventDefault();
        console.log('End');
    });

    //раюотаем с координатами пальцев
    box.addEventListener('touchmove',(e)=>{
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
});

//touches   выводит список всех пальцев, которые на экране
//targetTouches   все пальцы, которые взаимодействуют именно с этим элементом
//changedTouches  список пальцев, которые участвуют в текущем событии





