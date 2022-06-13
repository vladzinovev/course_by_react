// lesson 74 (MutationObserver, ResizeObserver и contenteditable)
'use strict';

//contenteditable позволет в блоке писать текст
//<div contenteditable class="box"></div>
const box = document.querySelector('.box');

//сущность следит было ли изменение с элементом
let observer = new MutationObserver(mutationRecord =>{
    console.log(mutationRecord);
});

//childList: true, если необходимо наблюдать за добавлением или удалением дочерних элементов (Включая текстовые узлы (text nodes))

//метод obsorver следит за чем то
//1 арг: выбираем элемент за которым следим
//2 арг: за каким действием следим
observer.observe(box,{
    childList :true
});
//отключаем слежку за изменением
observer.disconnect();

//ResizeObserver отслеживает изменение размеров элементов

