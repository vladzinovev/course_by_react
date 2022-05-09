// lesson 45 (events)
"use strict"

const btn = document.querySelector('button');
//1 способ выодит только последний alert
btn.onclick = function() {
    alert('Click');
};
btn.onclick = function() {
    alert('Second click');
};


//2 способ выводит все alert
btn.addEventListener('click', ()=>{
    alert('Click');
});
btn.addEventListener('click', ()=>{
    alert('Second click');
});

btn.addEventListener('mouseenter', ()=>{
    console.log('Hover');
});

btn.addEventListener('mouseenter', (e)=>{
    console.log('e'); //выводит все что относится к элементу
    console.log('e.target'); //получаем наш эл и  доступ к нему
    console.log('Hover');
});

//3 способ
const deleteElement = (e) =>{
    console.log('e.target'); 
};
btn.addEventListener('click',deleteElement);



let i=0;
const deleteEl = (e) =>{
    console.log('e.target');
    i++;
    if(i==1){
        btn.removeEventListener('click',deleteEl); //удаляем обработчик
    } 
};
btn.addEventListener('click',deleteEl);


const overlay = document.querySelector('.overlay');
const deleteElem = (e) =>{
    console.log(e.target); //выводит два раза одну и ту же кнопку
    console.log(e.сгккутеЕarget); //выведит два разных эл
    console.log(e.type); //тип события
};
btn.addEventListener('click',deleteElem);
overlay.addEventListener('click',deleteElem);



//отменяем переход по ссылке
const link = document.querySelector('a');
link.addEventListener('click',(event)=>{
    event.preventDefault();
});

//вешаем обработсик событий сразу на все эл
const btns = document.querySelectorAll('.button');
btns.forEach(item=>{
    item.addEventListener('click', deleteElem)
})

//чтобы обработчик сработал он раз надо в options прописать
btn.addEventListener('click',deleteEl,{once:true});










