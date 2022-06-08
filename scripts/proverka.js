"use strict";



let user = {name: 'Ivan'};
let arr = [user];
console.log(user);//{ name: 'Ivan' }
user = null;
console.log(user);//null
console.log(arr);//[ { name: 'Ivan' } ]



let map = new Map();
map.set(user,'data');
user=null;
console.log(map.keys);//{name: 'Ivan'}


let mapA = new WeakMap();
mapA.set(user,'data');
user=null;
console.log(mapA.has(user));//false
console.log(mapA);//WeakMap { <items unknown> }


