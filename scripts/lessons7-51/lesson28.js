// lesson 28 (methods and properties)
'use strict';

const str ="teSt";
console.log(str.length); //4
console.log(str[1]); //e
console.log(str.toUpperCase()); //TEST
console.log(str.toLowerCase()); //test

const arr = [1,2,4];

const fruit = "Some one fruit";
console.log(fruit.indexOf("fruit")); //9
console.log(fruit.indexOf("q")); //-1


let logg ="Hello world";
logg.slice(6,8);
logg += '...';
console.log(logg);//Hello world...
//первый аргумент начало,второй аргумент конец
console.log(logg.slice(6,11)); //world
console.log(logg.slice(6,10)); //worl
console.log(logg.slice(-4,-1)); //orl
console.log(logg.slice(1,6)); //ello
//первый аргумент начало,второй аргумент конец
//отрицательные значения не поддерживает
console.log(logg.substring(1,6)); //ello
//первый аргумент начало,второй аргумент количество
console.log(logg.substr(1,6)); //ello w

//Math
const num =12.5;
console.log(Math.round(num)); //13


const test = "12.2px";
console.log(parseInt(test)); //12
console.log(parseFloat(test)); //12.2













