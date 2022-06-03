// lesson 15 (operators in JS)
'use strict';

console.log('arr' + "- object");
console.log(4 + +"5");



let incr =10,
    decr=10;

incr++; //11
decr--; //9

++incr; //11
--decr; //9

console.log(incr++);  //10
console.log(decr--);  //10

console.log(++incr);  //11
console.log(--decr);  //9


console.log(5%2);  //1 (остаток от деления)

console.log(5*2 == 10);  //true
console.log(5*2 == '10');  //true
console.log(5*2 === 10);  //true
console.log(5*2 === '10');  //false

const isChecked= true,
      isClose = false;

console.log(isChecked && isClose); //false
console.log(isChecked && !isClose); //true
console.log(isChecked || isClose) ;//true


