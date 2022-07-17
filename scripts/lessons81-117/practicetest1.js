// Practice Test1
"use strict";

const { includes } = require("core-js/core/array");


//1 Какой результат даст этот код?

console.log(0 || 1); // 1
console.log(0 && 1); // 0
console.log(0 || NaN || false || null); // null

//2 Какой из методов безопаснее всего использовать, если мы четко хотим получить от пользователя текст и использовать его дальше?
insertAdjacentHTML

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
//undefined

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
