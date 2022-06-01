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
console.log(obj[id]);//1
console.log(obj[id1]);//3
console.log(obj[id2]);//4
console.log(obj);//{ name: 'Test', [Symbol(id3)]: 3, [Symbol()]: 1, [Symbol(id)]: 3, [Symbol(id)]: 4 }
for (let value in obj) console.log(value); //name



let num = Symbol("num");
const obj1 = {
    'secondname': 'Post',
    [num]: 1,
    getId:function(){
        return this[num];
    }
}
console.log(obj1.getId());//1
console.log(Object.getOwnPropertySymbols(obj1));//[ Symbol(num) ]
console.log(obj1[Object.getOwnPropertySymbols(obj1)[0]]);//1


const myAwesomeDB = {
    movies: [],
    actors: [],
    id:123,
    [Symbol("id")]:1234,//мы его никак не сможем изменить
    [Symbol.for("id")]:5678//мы его никак не сможем изменить
}
//представим что есть еще какой то сторонний код
myAwesomeDB.id='321321';
console.log(myAwesomeDB["id"]); //321321
console.log(myAwesomeDB[Symbol('id')]);//undefind
console.log(myAwesomeDB[Symbol.for('id')]);//5678
console.log(myAwesomeDB); 
/* получится
{
    movies: [],
    actors: [],
    id: '321321',
    [Symbol(id)]: 1234,
    [Symbol(id)]: 5678
} */



