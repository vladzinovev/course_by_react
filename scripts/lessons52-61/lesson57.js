// lesson 57 (дескрипторы свойств и полезные методы обьектов)
"use strict";




// writable, если стоит true , то свойтво в обьекте можно изменить, если false, то только для чтения
// enumerable, если стоит true , то свойтво будет перечисляться в циклах, если false, то циклы будут его игнорировать
// configurable, если стоит true , то свойтво можно будет удалить, а атрибут его изменить, если false, то делать этого нельзя 



const user={
    name:'Alex',
    surname:'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
};
console.log(Object.getOwnPropertyDescriptor(user,'name'));//{ value: 'Alex', writable: true, enumerable: true, configurable: true}

//изменяем наши параметры
//1аргум-обращаемся к нему, 2аргум-свойство, которое хотим изменить, 3арг-обьект с флагами, которые хотим модифицировать
Object.defineProperty(user,'name',{writable: false});
user.name='sddssds';//не получится перезаписать

//создаем новое свойство
Object.defineProperty(user,'gender',{value: 'male'});
console.log(Object.getOwnPropertyDescriptor(user,'gender'));//{value: 'male', writable: false, enumerable: false, configurable: false}

Object.defineProperty(user,'address',{value: prompt('Address?'),enumerable:true, configurable:true});// writable по умолчанию false

for (let key in user) console.log(key);// name  surname  birthday  showMyPublicData  address
 


//можем изменить сразу несколько свойств
Object.defineProperties(user,{
    name: {writable: false},
    surname: {writable: false},
});



