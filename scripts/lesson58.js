// lesson 57 (итерируемые конструкции)
"use strict"

// writable, если стоит true , то свойтво в обьекте можно изменить, если false, то только для чтения
// enumerable, если стоит true , то свойтво будет перечисляться в циклах, если false, то циклы будут его игнорировать
// configurable, если стоит true , то свойтво можно будет удалить, а атрибудт его изменить если, false, то делать этого нельзя

const user={
    name:'Alex',
    surname:'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
}

for (const key in user){
    //console.log(key);// name  surname  birthday  showMyPublicData
    console.log(user[key]);//Alex  Smith  20/04/1993  [Function: showMyPublicData]
}

const arr = ['b','a', 'c'];
/* for (const key in arr){
    console.log(key);// 0 1 2 
    console.log(arr[key]);// b a c
} */

for (const key of arr){
    console.log(key);// b a c 
    console.log(arr[key]);// undefind
}

const str = 'string';
for (const key in str){
    console.log(key);// 0 1 2 3 4 5
    console.log(str[key]);// s t r i n g 
}




const salaries = {
    john:500,
    ivan:1000,
    ann:5000,
    sayHello: function(){
        console.log('Hello');
    }
}
salaries[Symbol.iterator]=function(){
    return{
        current:this.john,
        last: this.ann,
        next(){
            if(this.current< this.last){
                this.current=this.current+500;
                return{done:false, value:this.current}
            }else{
                return{done: true}
            }
        }
    }
} 
for (let res of salaries){
    console.log(res);// 1000 1500 2000 2500 3000 3500 4000 4500 5000
}

const iterator = salaries[Symbol.iterator]();
console.log(iterator.next());//{ done: false, value: 1000 }