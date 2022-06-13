// lesson 71 (параметры документа, окна и работа с ними)
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
console.log(style);  //вывод ниже
/* 
CSSStyleDeclaration {0: 'accent-color', 1: 'align-content', 2: 'align-items', 3: 'align-self', 4: 'alignment-baseline', 5: 'animation-delay', 6: 'animation-direction', 7: 'animation-duration', 8: 'animation-fill-mode', 9: 'animation-iteration-count', 10: 'animation-name', 11: 'animation-play-state', 12: 'animation-timing-function', 13: 'app-region', 14: 'appearance', 15: 'backdrop-filter', 16: 'backface-visibility', 17: 'background-attachment', 18: 'background-blend-mode', 19: 'background-clip', 20: 'background-color', 21: 'background-image', 22: 'background-origin', 23: 'background-position', 24: 'background-repeat', 25: 'background-size', 26: 'baseline-shift', 27: 'block-size', 28: 'border-block-end-color', 29: 'border-block-end-style', 30: 'border-block-end-width', 31: 'border-block-start-color', 32: 'border-block-start-style', 33: 'border-block-start-width', 34: 'border-bottom-color', 35: 'border-bottom-left-radius', 36: 'border-bottom-right-radius', 37: 'border-bottom-style', 38: 'border-bottom-width', 39: 'border-collapse', 40: 'border-end-end-radius', 41: 'border-end-start-radius', 42: 'border-image-outset', 43: 'border-image-repeat', 44: 'border-image-slice', 45: 'border-image-source', 46: 'border-image-width', 47: 'border-inline-end-color', 48: 'border-inline-end-style', 49: 'border-inline-end-width', 50: 'border-inline-start-color', 51: 'border-inline-start-style', 52: 'border-inline-start-width', 53: 'border-left-color', 54: 'border-left-style', 55: 'border-left-width', 56: 'border-right-color', 57: 'border-right-style', 58: 'border-right-width', 59: 'border-start-end-radius', 60: 'border-start-start-radius', 61: 'border-top-color', 62: 'border-top-left-radius', 63: 'border-top-right-radius', 64: 'border-top-style', 65: 'border-top-width', 66: 'bottom', 67: 'box-shadow', 68: 'box-sizing', 69: 'break-after', 70: 'break-before', 71: 'break-inside', 72: 'buffered-rendering', 73: 'caption-side', 74: 'caret-color', 75: 'clear', 76: 'clip', 77: 'clip-path', 78: 'clip-rule', 79: 'color', 80: 'color-interpolation', 81: 'color-interpolation-filters', 82: 'color-rendering', 83: 'column-count', 84: 'column-gap', 85: 'column-rule-color', 86: 'column-rule-style', 87: 'column-rule-width', 88: 'column-span', 89: 'column-width', 90: 'contain-intrinsic-block-size', 91: 'contain-intrinsic-height', 92: 'contain-intrinsic-inline-size', 93: 'contain-intrinsic-size', 94: 'contain-intrinsic-width', 95: 'content', 96: 'cursor', 97: 'cx', 98: 'cy', 99: 'd', …}
*/
console.log(style.display);//block


console.log(document.scrollTop);//undefind
console.log(document.documentElement.scrollTop);//96
console.log(document.documentElement.clientWidth);//1665


//перемнные x,y
window.scrollBy(0,400);//пролистать на 400px от текщего положения
window.scrollTo(0,400);//пролистать на 400px от начала страницы










