// lesson 67 (WeakMap и WeakSet)
"use strict"

let user = {name: 'Ivan'};

const arr = [user];
user = null;
console.log(user);//null
console.log(user);//{name: 'Ivan'}



let map = new Map();
map.set(user,'data');
user=null;
console.log(map.keys);//{name: 'Ivan'}


let mapA = new WeakMap();
mapA.set(user,'data');
user=null;
console.log(mapA.has(user));//false
console.log(mapA);//WeakMap { <items unknown> }



let cache = new WeakMap();
function cacheUser(user){
    if(!cache.has(user)){
        cache.set(user, Date.now());
    }
    return cache.get(user);
}
let lena = {name: 'Elena'};
let alex = {name: 'Alex'};
cacheUser(lena);
cacheUser(alex);
lena=null;
console.log(cache.has(lena));//false
console.log(cache.has(alex));//true










