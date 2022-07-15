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


