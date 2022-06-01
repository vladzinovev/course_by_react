// lesson 39 (dynamic typing)
"use strict";

//To string
console.log(typeof(String(5))); //string
//1)
console.log(typeof(String(null))); //string

//2) канкатенация
console.log(5+'');//5
console.log(typeof(5+'')); //string
console.log(null+'');//null
console.log(typeof(null+'')); //string

const num=5;
console.log("https://vk.com/catalog/"+num);//https://vk.com/catalog/5

const fontSize = 26 + 'px';
console.log(fontSize); //26px
console.log(typeof(fontSize)); //string

//To number

//1)
console.log(Number('4')); //4
console.log(typeof(Number('4'))); //number

//2)
console.log(+'4'); //4
console.log(typeof(+'4')); //number

//3)
console.log(parseInt("15px",10)); //15
console.log(typeof(parseInt("15px",10))); //number



let answ= +prompt("Hello","");// плюс превращет в число



//To bolean

//false - 0, '', null, undefind, NaN;

//1)
let switcher= null;
if(switcher){
    console.log("null");//не выведится
}
switcher=1;
if(switcher){
    console.log("Один");//выведится
}


//2)
console.log('4'); 
console.log(typeof(Boolean('4'))); //boolean


//3)
console.log(!!"444");//true
console.log(typeof(!!"444")); //boolean
console.log(!"444");//false
console.log(typeof(!"444")); //boolean
//console.log(typeof("444")); //string










