// lesson 66 (сборщик мусора и утечки памяти)
"use strict";


function func(){
    //smth = "string";
    //верхняя строчка равна нижней
    window.smth = "string";
}

//утечка памяти
//если удалим node, то функция setInterval будет работать, а значит будет происходить утечка данных
const someRes = getData();

const node = document.querySelector('.class');

setInterval(function() {
    if(node){
        node.innerHTML = someRes;
    }
},1000);

//замыкание
function outer() {
    const potentiallyHugeArray = [];
    return function inner(){
        potentiallyHugeArray.push('Hello');
        console.log('Hello!!');
    };
}
const sayHello = outer();



//при удалении эл исчезает со страницы, testDiv остается в вертске, тем самым происходит утечка данных
function createElement(){
    const div = document.createElement('div');
    div.id = 'test';
    return div;
}
const testDiv = createElement();
document.body.append(testDiv);
function deleteElement(){
    document.body.removeChild(document.getElementById('test'));
}
deleteElement();

//в данном варианте нет утечки данных
function createElement(){
    const div = document.createElement('div');
    div.id = 'test';
    document.body.append(div);
    return div;
}
createElement();
function deleteElement(){
    document.body.removeChild(document.getElementById('test'));
}
deleteElement();