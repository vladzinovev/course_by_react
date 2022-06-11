// lesson 53 (оператор нулевого слияния)
'use strict';

const box = document.querySelector('.box');

const newHeight = 100;
const newWidth = 400;


function changeParams(elem, h, w) {
    elem.style.height = `${h}px`;
    elem.style.width = `${w}px`;
}
changeParams(box, newHeight, newWidth); //100 , 400



//по умолчанию

//если стоит || то будет 200, а не 0 , Nan , null
function changeParametrs(elem, h, w) {
    elem.style.height = `${h || 200}px`;
    elem.style.width = `${w || 200 }px`;
    console.log(elem.style.height,elem.style.width);
}
changeParametrs(box,0); //200 , 200

let userName;
console.log(userName ?? 'User'); //будет User

//если стоит ?? то в первую очередь 0 , Nan , null, а потом User
function changeParametr(elem, h, w) {
    elem.style.height = `${h ?? 200}px`;
    elem.style.width = `${w ?? 200 }px`;
    console.log(elem.style.height,elem.style.width);
}
changeParametr(box,0); //0 , 200


let userNames;
let userKeys;
console.log(userNames ?? userKeys ?? 'User'); //будет User

