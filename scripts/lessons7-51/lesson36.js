// lesson 36 (object oriented programming)
"use strict";


let str="some";
let strObj=new String(str);
console.log(typeof(str));  //string
console.log(strObj);//[String: 'some']
console.log(typeof(strObj));  //object

//console.dir отображает список свойств
console.dir([1,2,3]); //[ 1, 2, 3 ]     (array)

const soldier = {
    health:400,
    armor:200,
    sayHello:function(){
        console.log("hello");
    }
};
const John = {
    health:100
};

// создаем прототип (старый вариант)
John.__proto__=soldier;
console.log(John.armor); //200
John.sayHello(); //hello

//создаем прототип
Object.setPrototypeOf(John,soldier);
John.sayHello(); //hello

//создаем прототип
const Max = Object.create(soldier);
Max.sayHello(); //hello




const soldier = {
    health:400,
    armor:200,
};
const John = {
    health:100
};
Object.setPrototypeOf(John,soldier);
console.log(soldier);//{ health: 400, armor: 200 }
console.log(John.armor);//200
const copyObj= Object.create(soldier);
console.log(soldier);//{ health: 400, armor: 200 }
console.log(copyObj.armor);//200










