// lesson 55 (живые коллекции и полезные методы)
'use strict';

const boxesSelector = document.querySelectorAll('.box');
const boxesClass = document.getElementsByClassName('box');


console.log(boxesSelector);//NodeList(3) [div.box, div.box.this, div.box]
console.log(boxesClass);//HTMLCollection(3) [div.box, div.box.this, div.box]
console.log(document.body.children);

boxesSelector[0].remove();
boxesClass[0].remove();

//будет три эл, так как это копия эл
console.log(boxesSelector);//NodeList(3) [div.box, div.box.this, div.box]

//будет один эл так как два эл мы удалили
console.log(boxesClass);//HTMLCollection [div.box] 

//будет один эл, так как статичный массив
console.log(Array.from(boxesClass));//[div.box] 

for (let i =0; i<5; i++){
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
}
//будет три эл
console.log(boxesSelector);//NodeList(3) [div.box, div.box.this, div.box]
//будет шесть эл 
console.log(boxesClass);//[div.box, div.box, div.box, div.box, div.box, div.box]
//будет шесть эл 
console.log(Array.from(boxesClass));//[div.box, div.box, div.box, div.box, div.box, div.box]



//метод matches для поиска среди эл массива элемента с еще одним классом
boxesSelector.forEach(box =>{
    if (box.matches('.this')) console.log(box);
});

//метод closest выводит первый эл с таким селектором среди родителей
console.log(boxesSelector[0].closest('.wrapper'));



