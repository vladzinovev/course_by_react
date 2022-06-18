// lesson 88 (Метод перебора массивов)
"use strict";

//filter (возвращает новый массив)
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter(function(name){
    return name.length<5;
});
console.log(shortNames);//[ 'Ivan', 'Ann' ]


//map позволяет взять исходный массив и изменить каждый элемент внутри него
const answer = ['IvAn', 'AnnA', 'KSEnia'];
const result = answer.map(item=>item.toLowerCase());
console.log(result);//[ 'ivan', 'anna', 'ksenia' ]



//every/some (возвращает булевое значение)
//every вернет true, если все элементы подходят true
//some вернет true, если один элемент в массиве подходит true

const random = [4, 'abc', 'KSEnia'];
console.log(random.every(item=> typeof(item)==='number'));//false
console.log(random.some(item=> typeof(item)==='number'));//true

const num = [4, 7, 15];
console.log(num.every(item=> typeof(item)==='number'));//true
console.log(num.some(item=> typeof(item)==='number'));//true



//reduce (для вычисления какого-нибудь единого значения на основе всего массива)
const arr = [4,5,1,3,2,6];
const res = arr.reduce((sum,current)=>sum+current,0);//0-начальное значение, но можно и без него
console.log(res);//21

const arrS = ['apple', 'pear', 'plum'];
const sumS= arrS.reduce((sum,current)=>`${sum}, ${current}`);
console.log(sumS);//apple, pear, plum










