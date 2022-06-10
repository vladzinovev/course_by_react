// lesson 46 (navigation)
"use strict";


console.log(document.body);
console.log(document.head);
console.log(document.documentElement); //содержимое всей страницы

console.log(document.body.childNodes); //все дети у body
console.log(document.body.firstChild); //получить первого ребенка
console.log(document.body.lastChild); //получить последнего ребенка

console.log(document.querySelector('#current').parentNode);//получить родителя
console.log(document.querySelector('#current').parentNode.parentNode);//получить (деда) =родителя родителя

//получаем по атрибуту html следующий эл
console.log(document.querySelector('[data-current="3"]').nextSibling);
//получаем по атрибуту html предыдущий эл
console.log(document.querySelector('[data-current="3"]').previousSibling);


//получаем только эл

//след эл
console.log(document.querySelector('[data-current="3"]').nextElementSibling);
//получаем родителя
console.log(document.querySelector('#current').parentElement);

console.log(document.body.firstElementChild); //получить первого ребенка
console.log(document.body.lastElementChild); //получить последнего ребенка

//для получени ятолько всех детей элементов
for(let node of document.body.childNodes){
    if(node.nodeName == "text"){
        continue; //чтобы не выводил текстовые элементы
    }
    console.log(node);
};










