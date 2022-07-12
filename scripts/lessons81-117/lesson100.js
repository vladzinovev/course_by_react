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
//constructor
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


//class
class User {
    constructor(name, age) {
        this.name = name;
        this.userAge=age;
    }


    say(){
        console.log(`Имя пользователя: ${this.name}, возраст ${this.userAge}`);
    }

    getAge() {
        return this.userAge;
    }

    setAge(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this.userAge = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}
const ivan = new User('Ivan', 27);
console.log(ivan.name);//Ivan
ivan.userAge=99;
console.log(ivan.getAge());//99

ivan.name='Alex';
ivan.say();//Имя пользователя: Alex, возраст 99







class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    };

    #surname = 'Petrychenko';

    say=() => {
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    };

    get age(){
        return this._age;
    };

    set age(age){
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    };
}
const ivan = new User('Ivan', 27);
console.log(ivan.surname);//undefind
ivan.say();//Имя пользователя: Ivan Petrychenko, возраст 27








class User {
    constructor(name, age) {
        this.name = name;
        this._age=age;
    }

    #surname = 'Petrychenko';
    say(){
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст ${this._age}`);
    }

    getAge() {
        return this._age;
    }

    setAge(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}


const ivan = new User('Ivan', 27);
console.log(ivan.surname);//undefind
console.log(ivan.age);//undefind
console.log(ivan._age);//27
ivan.say();//Имя пользователя: Ivan Petrychenko, возраст 27
ivan.setAge(30);
console.log(ivan.getAge());//30
ivan.say();//Имя пользователя: Ivan Petrychenko, возраст 30
