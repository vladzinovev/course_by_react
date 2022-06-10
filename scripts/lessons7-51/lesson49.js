// lesson 49 (events on mobile devices)
"use strict";

//touchstart  когда коснулись пальцем элемента
//touchmove   когда после косания элемент начинает двигаться
//touchend   когда палец оторвался от элемента
//touchenter  когда палец наскакивает на эл
//touchleave  когда палец вышел за пределы элементы
//touchcancel  когда палец вышел за пределы экрана

window.addEventListener('DOMContentLoaded', () => {
    const box = document.querySelector('.box');
    
    //нажали пальцем на элемент (коснулись)
    box.addEventListener('touchstart',(e)=>{
        e.preventDefault();
        console.log('start');
        console.log(e.touches); //информация о пальце(ах) коснувшемся
    });

    //водим по элементу пальцем
    box.addEventListener('touchmove',(e)=>{
        e.preventDefault();
        console.log('move');
    });

    //тпустили палец
    box.addEventListener('touchend',(e)=>{
        e.preventDefault();
        console.log('End');
    });

    //работаем с координатами пальцев
    box.addEventListener('touchmove',(e)=>{
        e.preventDefault();
        console.log(e.targetTouches[0].pageX);
    });
});

//touches   выводит список всех пальцев, которые на экране
//targetTouches   все пальцы, которые взаимодействуют именно с этим элементом
//changedTouches  список пальцев, которые участвуют в текущем событии





