// lesson 114 (Event loop) 
'use strict';


//Пример 1

/* 
console.log(1);

setTimeout(()=>{
    console.log(2000);
},2000);

setTimeout(()=>{
    console.log(4000);
},4000);

console.log(2);
 */
//1
//2
//2000
//4000

//Пример 2
//мы не можем ничего сделать на странице, пока не выведится alert
let k=0;
function count(){
    for (let i=0;i<1000000000;i++){
        k++;
    }
    alert('done');
}
count();


//Пример 3
setTimeout(()=>{
    console.log(1);
},0);

console.log(2);

//2
//1








