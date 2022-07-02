// lesson 100 (инкапсуляция) 
'use strict';


/* 
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
*/
/* 
function User(name, age){
    this.name=name;
    let userAge=age;
    this.say=function(){
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };
}
const ivan = new User('Ivan', 27);
console.log(ivan.name);//Ivan
console.log(ivan.userAge);//undefined
ivan.name='Alex';
ivan.userAge=30;
ivan.say();//Имя пользователя: Alex, возраст 27

*/

function User(name, age){
    this.name=name;
    let userAge=age;
    this.say=function(){
        console.log(`Имя пользователя: ${this.name}, возраст ${userAge}`);
    };
    this.getAge=function(){
        return userAge;
    };
    this.setAge=function(age){
        if(typeof age === 'number' && age>0 && age<110){
        userAge=age;
        } else{
            console.log('Недопустимое значение');
        }
    };
}
const ivan = new User('Ivan', 27);
console.log(ivan.name);//Ivan
console.log(ivan.getAge());//27

ivan.name='Alex';
ivan.setAge(30);
ivan.say();//Имя пользователя: Alex, возраст 30


