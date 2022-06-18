// lesson 88 (Метод перебора массивов)
"use strict";

//filter (возвращает новый массив)
const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter(function(name){
    return name.length<5;
});
console.log(shortNames);//[ 'Ivan', 'Ann' ]


