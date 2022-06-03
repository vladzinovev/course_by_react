// lesson 33 (arrays and pseudo-arrays)
"use strict";

/* 

const arr = [1,2,3,6,8];

arr.pop(); //удаление последнего эл в массиве
arr.push(10); //добавление эл в конец массива

console.log(arr); //[ 1, 2, 3, 6 ]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

for (let value of arr){
    console.log(value);
}

arr.forEach(function(item,i,arr){
    console.log(`${i}: ${item} внутри массива ${arr}`);
}); */

const str = prompt("","");
const products = str.split(", ");
products.sort(); //сортирует по алфавиту эл в массиве
console.log(str);//выводит строку
console.log(products); //делает массив
console.log(products.join()); // превращает в строку эл массива

const arr = [15, 0, 1, 10, 22, 21, 8, 6];
arr.sort();
console.log(arr); //[0, 1, 10, 15, 21, 22, 6, 8]

function compareNum(a,b){
    return a-b;
}
arr.sort(compareNum);
console.log(arr); //[0, 1, 6, 8,10, 15, 21, 22]