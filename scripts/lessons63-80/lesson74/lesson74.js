'use strict';

const box = document.querySelector('.box');


let observer = new MutationObserver(mutationRecord =>{
    console.log(mutationRecord);
});

//метод obsorver следит за чем то
//1 арг: выбираем элемент за которым следим
//2 арг: за каким действием следим
observer.observe(box,{
    childList :true
});

observer.disconnect();

//ResizeObserver отслеживает изменение размеров элементов

