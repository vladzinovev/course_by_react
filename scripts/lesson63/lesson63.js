// lesson 63 (ClassList)
"use strict"

const btns = document.querySelectorAll('button');

//получаем количество классов у первой кнопки
console.log(btns[0].classList.length);//2
//получаем класс под определенным индексом у эл
console.log(btns[0].classList.item(0));//blue
//добавляем класс к эл в конец уже существующих классов
console.log(btns[0].classList.add('red', 'white'));
//удаляем определенный класс
console.log(btns[0].classList.remove('blue'));
//если данный класс есть, то удаляем его, а если данного класса нет, то удаляем его
console.log(btns[0].classList.toggle('blue'));

//выводит булиновое значение (true или false)
if (btns[1].classList.contain('blue')){
    console.log('blue');
}


btns[0].addEventListener('click',()=>{
    if (!btns[1].classList.contains('red')){
        btns[1].classList.add('red');
    }else{
        btns[1].classList.remove('red');
    }
    //или
    btns[1].classList.toggle('red');
});

















