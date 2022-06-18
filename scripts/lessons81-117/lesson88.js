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


