// lesson 42 (getting elements from the page)
"use strict";

//получаем эл через id
const box = document.getElementById('box'); 

//получаем все эл button
const btns = document.getElementsByTagName('button');
//получаем второй эл button из всех
const btn = document.getElementsByTagName('button')[2];
//получаем второй эл button из всех
const btnses = document.getElementsByTagName('button');
console.log(btnses[2]);

//получаем все элементы через class
const circles = document.getElementsByClassName('circle');

//получаем все элементы через selector
const hearts = document.querySelectorAll('.heart');

hearts.forEach(item=>{
    console.log(item);
});
//получаем первый элементы на странице по selector
const oneHeart = document.querySelector('.heart');










