// lesson 76 (Контекст вызова.This)
"use strict";


//1) обычная функция this =window, но если включить use strict=undefind;
function showThis(){
    console.log(this);
    function sum(){
        console.log(this);
        //return this.a + this.b; //не сработает
        return a + b;
    }
}
showThis(4,5);

//2)контекст у методов обьектов - сам обьект
const obj={
    a:20,
    b:10,
    sum:function(){
        console.log(this);
    }
}
obj.sum();//{ a: 20, b: 10, sum: [Function: sum] }

const object={
    a:20,
    b:10,
    sum:function(){
        function shout(){
            console.log(this);
        }
        shout();
    }
}
object.sum();//при use strict будет undefind



//3)this в конструкторах и классах - новый экземпляр обьекта
function User(name,id){
    this.name = name;
    this.id=id;
    this.human=true;
    this.hello=function(){
        console.log(`Hello ${this.name}`);
    };
}
const ivan = new User('Ivan',28);


//4)ручная привязка this: call, apply, bind
function sayName(surname){
    console.log(this);
    console.log(this.name + surname);
}
const user ={
    name:'John'
};
sayName.call(user,'Smith');//{ name: 'John' } //JohnSmith
sayName.apply(user,['Smith']);//{ name: 'John' } //JohnSmith


function count(num){
    return this*num;
}
const double = count.bind(2);
console.log(double(3));//6
console.log(double(13));//26






