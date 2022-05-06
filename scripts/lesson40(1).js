// lesson 41 (test)
"use strict"


/* 
const result = getSum(5,6);
const getSum = function(a,b){
    return a + b;
};
 */

console.log(typeof(NaN));


console.log(typeof('4'));

const user = {
    name: 'Alex',
    age: 25
}
const {name, age} = user;

const num = [1, function(){ console.log("hello")}, 2];
console.log(num);




console.log(0 || 1);//1
console.log(0 && 1);//0
console.log("b" > "a");
console.log(0 || NaN || false || null);//null



for (let i = 1; i < 5; i++) {
    console.log(i + 1)
}


function foo(a,b) {
    const [first] = a;
    const {eng} = b;
    console.log(`${first} ${eng}`);
    return `${first} ${eng}`;
}
const result = foo(['Hello', 'Привет'], {ru: 'Мир', eng: 'World'})


let time = '';
2 > 3 || 2 ? time = 'Day' : time = 'Night' ;
console.log(time);