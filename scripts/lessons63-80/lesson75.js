// lesson 75 (function constructors)
"use strict";


//устаревший синтаксис
const numN = new Number(3);
console.log(numN);//[Number: 3]

const numF = new Function(3);
console.log(numF);//[Function: anonymous]

//современный синтаксис
function User(name,id){
    this.name = name;
    this.id=id;
    this.human=true;
    this.hello=function(){
        console.log(`Hello ${this.name}`);
    };
}
const ivan = new User('Ivan',28);
const alex = new User('Alex',20);

ivan.hello();//Hello Ivan
alex.hello();//Hello Alex

console.log(ivan);//User { name: 'Ivan', id: 28, human: true, hello: [Function (anonymous)]}
console.log(ivan);//User { name: 'Ivan', id: 28, human: true, hello: [Function (anonymous)]}

User.prototype.exit=function(){
    console.log(`Пользователь ${this.name} ушел`);
};

ivan.exit();//Пользователь Ivan ушел
console.log(ivan);//User { name: 'Ivan', id: 28, human: true, hello: [Function (anonymous)]}
console.log(ivan);//User { name: 'Ivan', id: 28, human: true, hello: [Function (anonymous)]}

//class constructors

class User{
    constructor(name,id){
        this.name = name;
        this.id=id;
        this.human=true;
    }
    hello() {
        console.log(`Hello ${this.name}`);
    }
    exit() {
        console.log(`Пользователь ${this.name} ушел`);
    }
}

