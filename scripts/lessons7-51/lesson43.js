// lesson 43 (actions with elements on the page)
"use strict";


const box = document.getElementById('box'); 
box.style.backgroundColor='blue';
box.style.width='500px';
//или
box.style.cssText='background-color:blue; width:500px';

const btns = document.getElementsByTagName('button');
const circles = document.getElementsByClassName('circle');
btns[1].style.borderRadius='100%';
circles[0].style.backgroundColor='red';



const hearts = document.querySelectorAll('.heart');
//или
const hearts = wrapper.querySelectorAll('.heart');
//item-каждый элемент, второй аргумент -номер по порядку, третий - ссылка на массив
hearts.forEach(item=>{
    item.style.backgroundColor='yellow';
});
/* 
for (let i=0; i<hearts.length;i++){
    hearts[i].style.backgroundColor='black';
}
*/

//создать элемент
const div = document.createElement('div');
//const text = document.createTextNode('Тут был я')

//добавили класс black
div.classList.add('black');

//добавить элемент в body в конце 
document.body.append(div);
//или старый вариант (через родителя)
//wrapper.appendChild(div);

//добавить элемент в внутри wrapper в конец
document.querySelector('.wrapper').append(div);
//или
const wrapper = document.querySelector('.wrapper');
wrapper.append(div);

//добавить элемент в внутри wrapper в начало
wrapper.prepend(div);


//вставить эл перед каким то определенным эл
hearts[0].before(div);
//вставить эл после какого то определенного эл
hearts[0].after(div);
//или старый вариант вставить (что, перед каким) (через родителя)
//wrapper.insertBefore(div,hearts[0]);

//удалить эл
circles[0].remove();
// или старый вариант удалить (через родителя)
//wrapper.removeChild(hearts[1])

//заменить эл каким то эл
hearts[0].replaceWith(circles[0]);
//или старый вриант заменить эл каким то эл (какой , перед каким)
wrapper.replaceChild(circles[0], hearts[0]);


//вписать текст html
div.innerHTML="Hello world";
div.innerHTML="<h1>Hello world</h1>";
//или только с текстом
div.textContent="Hello";



//вставить кусочек html кода перед или после эл (спец слово, что вставляем)
//спец слово:
// afterbegin вставялет в начало
//afterend вставяляет после эл
// beforebegin вставляет перед элементом
// beforeend вставляет в конец нашего эл
div.insertAdjacentHTML('beforebegin', '<h2>Hello</h2>');










