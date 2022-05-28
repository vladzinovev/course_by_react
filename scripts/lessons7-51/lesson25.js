// lesson 25 (functions)
"use strict";

function showFirstMessage(){
    console.log("Hello world!");
}
showFirstMessage();


function showSecondMessage(text){
    console.log(text);
}
showSecondMessage("Hello world!");


let num1=20;
let num2=20;
function showThirdMessage(text){
    console.log(text);
    num1=10;
    let num2=10;
}
showThirdMessage("Hello world!");
console.log(num1);   //10
console.log(num2);   //20


function calc(a,b){
    return (a+b);
}
console.log(calc(4,8));
console.log(calc(8,3));
console.log(calc(10,1));


function ret(){
    let num = 30;
    return num;
}
const anotherNum = ret();
console.log(anotherNum);


const logger = function(){
    console.log("Function logger");
};
logger();
function calc(a,b){
    console.log(a+b);
}
const calc1 = (a,b) =>{
    console.log(a+b);
   return a+b;
};
const calc2 = (a,b) => console.log(a+b);

calc(5,6);
calc1(5,6);
calc2(5,6);




