// lesson 99 (get/set) 
"use strict";


const persone ={
    name:"Alex",
    age:25,

    get userAge(){
        return this.age;
    },
    set userAge(num){
        this.age=num;
    }
};
console.log(persone.userAge);//25
console.log(persone.userAge = 30);//30
console.log(persone.userAge);//30






