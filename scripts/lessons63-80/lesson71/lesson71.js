'use strict';

const box = document.querySelector('.box');
const btn = document.querySelector('button');

const width = box.clientWidth; //ширина текста в окне
const height = box.clientHeight; //высота текста в окне

const owidth = box.offsetWidth; //ширина блока с текстом
const oheight = box.offsetHeight; //высота блока с текстом

const swidth = box.scrollWidth; //ширина контента
const sheight = box.scrollHeight; //высота контента

const scrl=box.scrollTop;//высота пролистанного контента

console.log(width,height); //400 350
console.log(owidth,oheight);
console.log(swidth,sheight);//400 1298


btn.addEventListener('click',()=>{
    box.style.height = box.scrollHeight +'px';
});

//получаем всевозможные параметры об обьекте
console.log(box.getBoundingClientRect());//DOMRect {x: 290, y: 50, width: 400, height: 350, top: 50, …}
console.log(box.getBoundingClientRect().top);//50

//все стили обьекта можем посмотреть
const style = window.getComputedStyle(box);
console.log(style);
console.log(style.display);//block


console.log(document.scrollTop);//undefind
console.log(document.documentElement.scrollTop);//96


//перемнные x,y
window.scrollBy(0,400);//пролистать на 400px от текщего положения
window.scrollTo(0,400);//пролистать на 400px от начала страницы










