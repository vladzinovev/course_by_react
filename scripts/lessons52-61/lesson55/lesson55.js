'use strict';

const boxesSelector = document.querySelectorAll('.box');
const boxesClass = document.getElementsByClassName('box');


console.log(boxesSelector);
console.log(boxesClass);
console.log(document.body.children);

boxesSelector[0].remove();
boxesClass[0].remove();

console.log(boxesSelector);//будет три эл, так как это копия эл
console.log(boxesClass);//будет один эл так как два эл мы удалили
console.log(Array.from(boxesClass));//будет один эл, так как статичный массив

for (let i =0; i<5; i++){
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
}
console.log(boxesSelector);//будет три эл
console.log(boxesClass);//будет шесть эл 
console.log(Array.from(boxesClass));//будет шесть эл 



//метод matches для поиска среди эл массива элемента с еще одним классом
boxesSelector.forEach(box =>{
    if (box.matches('.this')) console.log(box);
});

//метод closest выводит первый эл с таким селектором среди родителей
console.log(boxesSelector[0].closest('.wrapper'));



