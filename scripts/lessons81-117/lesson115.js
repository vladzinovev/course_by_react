// lesson 115 (макро и микрозадачи)
"use strict";

setTimeout(()=>console.log('timeout'));

Promise.resolve()
    .then(()=>console.log('promise'));

console.log('code');


//code
//promise
//timeout



//()=>{}
//microtasks: then/catch/finally/await
//render (перерисовка)
//()=>{}
//microtasks: then/catch/finally/await
//render (перерисовка)
//()=>{}


setTimeout(()=>console.log('timeout'));
setTimeout(()=>console.log('timeout2'));
Promise.resolve()
    .then(()=>console.log('promise'));

console.log('code');

Promise.resolve()
    .then(()=>console.log('promise2'));

console.log('code2');
/* 
code
code2
promise
promise2
timeout
timeout2
*/



setTimeout(()=>console.log('timeout'));

Promise.resolve()
    .then(()=>console.log('promise'));

queueMicrotask(()=>console.log('wow'));

Promise.resolve()
    .then(()=>console.log('promise2'));

console.log('code');
/* 
code
promise
wow
promise2
timeout
*/