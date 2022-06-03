// lesson 56 (data type symbol)
"use strict";



const obj = {
    'name':'Test',
    [Symbol('id3')]:3
};
console.log(obj['id3']);//undefind

let id = Symbol();
obj[id]=1;
console.log(obj);//{ name: 'Test', [Symbol(id3)]: 3, [Symbol()]: 1 }
console.log(obj[id]);//1
//console.log(obj[id3]);//ошибка


let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 == id2);//false
obj[id1]=3;
obj[id2]=4;
console.log(Object.getOwnPropertySymbols(obj));//[ Symbol(id3), Symbol(), Symbol(id), Symbol(id) ]
console.log(obj[Object.getOwnPropertySymbols(obj)[0]]);//3
console.log(obj[id]);//1
console.log(obj[id1]);//3
console.log(obj[id2]);//4
console.log(obj);//{ name: 'Test', [Symbol(id3)]: 3, [Symbol()]: 1, [Symbol(id)]: 3, [Symbol(id)]: 4 }
for (let value in obj) console.log(value); //name



let num = Symbol("num");
const obj1 = {
    'secondname': 'Post',
    [Symbol('id')]: 2,
    [Symbol('num')]: 3,
    [num]: 1,
    getId:function(){
        return this[num];
    }
};
console.log(obj1);
/* получилось
{
    secondname: 'Post',
    getId: [Function: getId],
    [Symbol(id)]: 2,
    [Symbol(num)]: 3,
    [Symbol(num)]: 1
} */
  
console.log(obj1.getId());//1
console.log(Object.getOwnPropertySymbols(obj1));//[ Symbol(id), Symbol(num), Symbol(num) ]
console.log(obj1[Object.getOwnPropertySymbols(obj1)[0]]);//2


const myAwesomeDB = {
    movies: [],
    actors: [],
    id:123,
    [Symbol("id")]:1234,//мы его никак не сможем изменить
    [Symbol.for("id")]:5678//мы его никак не сможем изменить
};
//представим что есть еще какой то сторонний код
myAwesomeDB.id='4321';
console.log(myAwesomeDB["id"]); //4321
console.log(myAwesomeDB[Symbol('id')]);//undefind
console.log(myAwesomeDB[Symbol.for('id')]);//5678
console.log(myAwesomeDB);
/* получится
{
  movies: [],
  actors: [],
  id: '4321',
  [Symbol(id)]: 1234,
  [Symbol(id)]: 5678
}*/



