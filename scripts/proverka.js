

const boxesSelector = document.querySelectorAll('.box');
const boxesClass = document.getElementsByClassName('box');


console.log(boxesSelector);//[div.box, div#box.box]
console.log(boxesClass);//[div.box, div#box.box, box: div#box.box]
console.log(document.body.children);

boxesSelector[0].remove();
boxesClass[0].remove();

console.log(boxesSelector);//будет три эл, так как это копия эл
console.log(boxesClass);//будет один эл так как два эл мы удалили
console.log(Array.from(boxesClass));//будет один эл, так как статичный массив
console.log(Array.from(boxesSelector));

for (let i =0; i<5; i++){
    const div = document.createElement('div');
    div.classList.add('box');
    document.body.append(div);
}
console.log(boxesSelector);//будет три эл
console.log(boxesClass);//будет шесть эл 
console.log(Array.from(boxesClass));//будет шесть эл 
console.log(Array.from(boxesSelector));//будет три эл 


//метод matches для поиска среди эл массива элемента с еще одним классом
boxesSelector.forEach(box =>{
    if (box.matches('.this')) console.log(box);
});

//метод closest выводит первый эл с таким селектором среди родителей
console.log(boxesSelector[0].closest('.wrapper'));

function setOptions(height, width, ...additional) {
    console.log(height, width, ...additional);
}
setOptions(400, 500, 'red', 'top');

const log = function(a,b,...rest){
    console.log(a,b,...rest);
};
log('basic','rest','operator','usage');//basic rest operator usage