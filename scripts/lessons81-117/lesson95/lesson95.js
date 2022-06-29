// lesson 95 (сохраняем данные без БД) 
"use strict";

//local Storage

//записываем новый ключ (setItem)-1 арг -нзв ключа, 2арг - значение ключа
localStorage.setItem('number',5);

//получаем данные с local Storage
localStorage.getItem('number');//5

//удаляем ключ
localStorage.removeItem('number');

//очищаем наше хранилище
localStorage.clear();


//
const checkbox = document.querySelector('#checkbox'),
      form=document.querySelector('form'),
      change=document.querySelector('#color');

//проверяем стоит ли галочка в кеше
if(localStorage.getItem(isChecked)){
    checkbox.checked=true;
}


//при клике на чекбокс сохраняем галочку на сервере
checkbox.addEventListener('cahnge',()=>{
    localStorage.setItem('isChecked',true);
});

if(localStorage.getItem('bg')==='changed'){
    form.style.background='red';
}

change.addEventListener('click',()=>{
    if(localStorage.getItem('bg')==='changed'){
        localStorage.removeItem('bg');
        form.style.background='#fff';

    } else{
        localStorage.setItem('bg','changed');
        form.style.background='red';
    }
    
});

//отправляем данные пользователя
const persone = {
    name:'Alex',
    age:25
};
const serializedPersone=JSON.stringify(persone);
localStorage.setItem('alex',serializedPersone);

console.log(JSON.parse(localStorage.getItem('alex')));//{name:"Alex",age:25}



























