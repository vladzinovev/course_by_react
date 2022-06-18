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
