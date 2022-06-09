// lesson 42 (getting elements from the page)
"use strict";

//получаем эл через id
const box = document.getElementById('box'); 

//получаем все эл по тегу button
const btns = document.getElementsByTagName('button');
//получаем второй эл тега button из всех
const btn = document.getElementsByTagName('button')[2];
//получаем второй эл button из всех
const btnses = document.getElementsByTagName('button');
console.log(btnses[2]);

//получаем все элементы через class
const circles = document.getElementsByClassName('circle');

//получаем все элементы через selector класса
const hearts = document.querySelectorAll('.heart');

hearts.forEach(item=>{
    console.log(item);
});
//получаем первый элементы на странице по selector через класс
const oneHeart = document.querySelector('.heart');










