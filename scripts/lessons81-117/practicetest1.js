// Practice Test1
"use strict";

const { includes } = require("core-js/core/array");


//1 Какой результат даст этот код?

console.log(0 || 1); // 1
console.log(0 && 1); // 0
console.log(0 || NaN || false || null); // null

//2 Какой из методов безопаснее всего использовать, если мы четко хотим получить от пользователя текст и использовать его дальше?
//не правильно (insertAdjacentHTML)
//правильно (textcontent)

//3 Какой из команд можно создать элемент на странице?
document.createElement('div');

//4 Какой итоговый результат мы получим в консоли, если запустить этот код?
const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
 
async function one() {
    const promises = [a(), b(), c()];
    const [outpu1, outpu2, outpu3] = await Promise.all(promises);
    return `one is done: ${outpu1} ${outpu2} ${outpu3}`;
}
 
async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
 
async function three() {
    const outpu1 = await a();
    const outpu2 = await b();
    const outpu3 = await c();
    return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}
 
one().then(console.log); //abc
two().then(console.log);//a
three().then(console.log);//abc
//two is done: a
//one is done: a b c
//three is done: a b c


//5 Как правильно задать наследование одного класса от другого?
class Slider extends Element{}

//6 Микрозадачи в событийном цикле - это...
//действия которые создаются промисами

//7 Что будет выведено в консоль?

if (0) {
    console.log('first')
} else if (NaN) {
    console.log('second');
} else if (' ') {
    console.log('third');
} else if (null) {
    console.log('fourth');
} 
//third

//8 Что будет выведено в консоль в результате работы функции?
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
getSum(4, 5);
//не верно (undefined)
//правильно (ничего, будет ошибка)

//9 Какого метода не существует у свойства classList?
includes();

//10 Как называется прием из кода ниже?

const user = {
    name: 'Alex',
    age: 25
};
const {name, age} = user;
//деструктуризация

//11 Какой командой можно удалить элемент со страницы?
div.remove();

//12 Какой формат экспорта/импорта ES6 модулей в JS записан синтаксически правильно?     
export function sum(a,b){
    console.log(a+b);
}
import {sum} from './somefile.js';

//13 Какой из вариантов получения этого элемента со страницы будет правильным? <div id="hi">Hello</div>
document.querySelector('#hi');

//14 Какой результат работы функции combineUrls в данном случае?
combineUrls('https', 'mysite.com');
 
const combineUrls = (protocol, domain) => {
    return `${protocol}://${domain}`;
};
//referenceError

//15 Какое значение будет выведено в консоль при выполнении этого кода?
let c = 4;
function addX(x) {
  return function(n) {
     return n + x;
  };
}
 
const addThree = addX(3);
 
let d = addThree(c);
let res = addThree(c);
 
console.log(res);//7

//16 Как отменить стандартное поведение браузера при работе со ссылками, формами и тп?
event.preventDefault();

//17 a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
//Нет, это два разных массива с одинаковым содержимым

//18 Что выведет этот код:

let y = 1; 
let x = y = 2; 
console.log(x);//2

//19 Сколько аргументов может быть у функции?
//сколько угодно

//20 Какой код подходит на место пропущенной части функции?
const msg = 'My number +12345678, name: Oleg';
 
function transformMsg(str) {
 
    let a =str.replace(/\+\d{8}/,"*****");
    let b =a.replace(/\w{4}:\s\w{1,}/,"hidden");
    return b;
}
 
console.log(transformMsg(msg));
//Результатом вызова этой функции сейчас будет:
//My number *****, hidden


//21 Код ниже работает без ошибки. Но опытный разработчик считает его плохим. В чем причина?

const price = 500;
const money = 400;
 
switch (true) {
    case price > money:
        console.log('Мне не хватает денег');
        break;
    case price < money:
        console.log('Мне хватает денег!');
        break;
}
//не верно (после каждого случая нет ключевого слова break)
//верно (все перечисленное)

//22 Что будет содержаться в переменной result после завершения кода?

function foo(a,b) {
    const [first, second] = a;
    const {eng, ru} = b;
 
    return `${second}, ${ru}`;
}
 
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'});
console.log(result);
//Привет, Мир

//23 Что выведет в консоль данный код?

const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 1000);
    setTimeout(() => {
        reject('bar');
    }, 900);
});
  
promise.then((value) => {
    console.log(value);
}).catch((e) => console.log(e));
//bar

//24 Что будет результатом выполнения этого кода на странице?

const msg = 'Заявка №231';
 
const div = document.createElement('div');
div.style.background = 'red';
div.setAttribute('data-msg', true);
div.textContent(msg);
 
document.body.append(div);
//не верно (блок красного цвета с текстом 'Заявка №231' и атрибутом data-msg=true)
//верно (будет ошибка) textContent - это свойство блока, его текстовый контент. Это не функция. Поэтому вот так: div.textContent = msg;

//25 Что будет выведено в консоль в результате работы функции?

function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional);
}
setOptions(400, 500, 'red', 'top');  
//400 500 red top

//26  Какая основная проблема этого кода?

async function makeRequest() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(json => console.log(json));
}
 
makeRequest();
//нет преобразвания ответа 
/* async function makeRequest() {
    return await fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then(response => response.json())
    .then(json => console.log(json))
}
makeRequest() 
*/

//27  Event loop - это...
//механизм контроля очереди вызова фугнкций

//28 Какие из методов массивов возвращают новый массив в результате своей работы?
//Это важно знать перед частью с react'ом, да и в работе тоже. Попробуйте вспомнить, мы все их обсуждали и использовали. 
//filter, map, slice

//29 Что такое объект события?
//это обьект, который содержит всю информацию о произошедшем событии

//30 Что будет содержаться в переменной result в результате работы кода?

const arr = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];
 
const result = arr.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr);
console.log(result);
//4500