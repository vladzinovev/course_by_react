// lesson 40 (closure and lexical environment)
"use strict";

let number = 5;
function logNumber(){
    console.log(number);
}
number = 6;
logNumber(); //6


let num = 5;
function logNum(){
    let num=4;
    console.log(num);
}
num = 6;
logNum(); //4



function createCounter(){
    let counter = 0;

    const myFunction = function(){
        counter = counter +1;
        return counter;
    };
    return myFunction;
}
const increment = createCounter();
const increment2 = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();
const c21 = increment2();
const c22 = increment2();
console.log(increment, increment2, c1,c2,c3,c21,c22);//[Function: myFunction] [Function: myFunction] 1 2 3 1 2


{
    let msg = "Hello";
}
console.log(msg);

for (let i=0; i <9; i++){
    for (let j = 0;j<9;j++){
        let num = 3;
    }
    console.log(num);
}







