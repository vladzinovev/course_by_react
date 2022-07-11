// lesson 111 (функции-генераторы) 
'use strict';


function* generator(){
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}


const str= generator();
console.log(str.next());//{ value: 'S', done: false }
console.log(str.next().value);// c
console.log(str.next());//{ value: 'r', done: false }
console.log(str.next());//{ value: 'i', done: false }
console.log(str.next());//{ value: 'p', done: false }
console.log(str.next());//{ value: 't', done: false }
console.log(str.next());//{ value: undefined, done: true }

