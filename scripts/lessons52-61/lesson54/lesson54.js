'use strict';

const box = document.querySelector('.box');
const block = document.querySelector('.block');

console.log(block);
/* 
console.log(block.textContent);
console.log(1+2); //не выведится так как предыдущий вызов ошибка
*/

if(block){
    console.log(block.textContent);
}
console.log(1+2); //сейчас выведится так как предыдущий вызов не содержит ошибкуошибка


//или использовать оператор рациональной цепочки (?)

console.log(block?.textContent);//undefind
console.log(1+2);//3


const userData={
    name: 'Ivan',
    age: null
}
/* 
console.log(userData.skills.js);//буд ошибка так как такого эл нет
*/
/* 
if(userData && userData.skills && userData.skills.js){
    console.log(userData.skills.js);//ошибки не будет
}
 */
//или
console.log(userData?.skills?.js);//будет undefind


const userDataFunc={
    name: 'Ivan',
    age: null,
    say:function(){
        console.log('Hello');
    }
}
userData.say();
userData.hey?.();