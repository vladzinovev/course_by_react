// lesson 100 (инкапсуляция) 
'use strict';



function User(name, age){
    this.name=name;
    this.age=age;
    this.say=function(){
        console.log(`Имя пользователя: ${this.name}, возраст ${this.age}`);
    };
}
const ivan = new User('Ivan', 27);
console.log(ivan.name);//Ivan
console.log(ivan.age);//27
ivan.name='Alex';
ivan.age=30;
ivan.say();//Имя пользователя: Alex, возраст 30

