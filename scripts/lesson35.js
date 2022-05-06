// lesson 35 (passing by reference)
"use strict"


let a=5,
    b=a;
b=b+5;
console.log(b); //10
console.log(a); //5


const obj = {
    a:5,
    b:1
};
const copy = obj; //ссылку на объект
copy.a=10;
console.log(copy); //{ a: 10, b: 1 }
console.log(obj); //{ a: 10, b: 1 }

//поверхностная копия объектов
function copy(mainObj){
    let objCopy={};
    let key;
    for(key in mainObj){
        objCopy[key]=mainObj[key];
    }
    return objCopy;
}
const numbers = {
    a:2,
    b:5,
    c:{
        x:7,
        y:4
    }
};
const newNumbers = copy(numbers);
newNumbers.a=10;
console.log(newNumbers); //{a: 10, b: 5, c: { x: 7, y: 4}}
console.log(numbers); // {a: 2, b: 5, c: { x: 7, y: 4}}


const add ={
    d:17,
    e:20
};
//независимый объект из обединения объектов
console.log(Object.assign(numbers,add));
//{a: 2, b: 5, c: { x: 7, y: 4 }, d: 17, e: 20}


//создаем новый клониованный объект
const clone = Object.assign({},add);
clone.d =20;
console.log(add);//{d: 17, e: 20}
console.log(clone);//{d: 20, e: 20}








const oldArray=['a','b','c'];
const newArray = oldArray.slice();
newArray[1]='done';
console.log(newArray);//[ 'a', 'done', 'c' ]
console.log(oldArray);//[ 'a', 'b', 'c' ]





const video=['youtube','vimeo','rutube'],
      blogs = ['wordpress','livejournal','blogger'],
      internet = [...video,...blogs,'vk','facebook'];
console.log(internet);
/* [
    'youtube',
    'vimeo',
    'rutube',
    'wordpress',
    'livejournal',
    'blogger',
    'vk',
    'facebook'
] */



function log(a,b,c){
    console.log(a);
    console.log(b);
    console.log(c);
}
const num =[2, 5, 7];
log(...num); // 2, 5, 7]







//создаем новый клониованный массива
const array = ["a","b"];
const newArray=[...array];
console.log(newArray); //[ 'a', 'b' ]



//создаем новый клониованный объектa
const q={
    one:1,
    two:2
};
const newObj={...q};
newObj.tt=3;
console.log(newObj); // { one: 1, two: 2, tt: 3 }
console.log(q); //{ one: 1, two: 2 }

