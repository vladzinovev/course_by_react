// lesson 101 (прием модуль) 
'use strict';

const number = 1;

//анонимная самовызывающаяся функция
(function(){
    let numbet =2;
    console.log(number);//2
    console.log(number + 3);//5
}());
console.log(number);//1

//обьектный интерфейс
const user = (function(){
    const privat = function(){
        console.log('I am privat!');
    };

    return{
        sayHello:privat
    };
}());

user.sayHello();//I am privat!

