// lesson 39 (dynamic typing)
"use strict"

//To string

//1)
console.log(typeof(String(null))); //string

//2) канкатенация
console.log(typeof(5+'')); //string
console.log(typeof(null+'')); //string

const num=5;
console.log("https://vk.com/catalog/"+num);//https://vk.com/catalog/5

const fontSize = 26 + 'px';


//To number

//1)
console.log(typeof(Number('4'))); //number

//2)
console.log(typeof(+'4')); //number

//3)
console.log(typeof(parseInt("15px",10))); //number
console.log(parseInt("15px",10)); //15


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
console.log(typeof(Boolean('4'))); //boolean


//3)
console.log(typeof(!!"444")); //boolean
console.log(typeof(!"444")); //boolean
//console.log(typeof("444")); //string










