// lesson 59 (Map)
"use strict"



const user={
    4:'Alex',
    surname:'Smith',
    birthday: '20/04/1993',
    showMyPublicData: function(){
        console.log(`${this.name} ${this.surname}`);
    }
}
console.log(typeof(Object.keys(user)[0]));//string (цифра 4 - строка)

//создаем из обьекта массив с массивами
const userMap = new Map(Object.entries(user));
console.log(userMap);
/* 
Map(4) {
    '4' => 'Alex',
    'surname' => 'Smith',
    'birthday' => '20/04/1993',
    'showMyPublicData' => [Function: showMyPublicData]
} */


//превратить из карты в обьект
const newUserObj = Object.fromEntries(userMap);
console.log(newUserObj);
/* 
{
    '4': 'Alex',
    surname: 'Smith',
    birthday: '20/04/1993',
    showMyPublicData: [Function: showMyPublicData]
} */

const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
]

const map = new Map();//создаем новую карту
const map2 = new Map([
    [{paper:400},8000]
]);//создаем новую карту с наальными значениями

//в set передаем два аргумента ключ и значение
map.set(shops[0],5000);//5000-бюджет
console.log(map);//Map(1) { { rice: 500 } => 5000 }

map.set(shops[1],15000);//15000-бюджет
map.set(shops[2],25000);//25000-бюджет
console.log(map);
/* Map(3) {
    { rice: 500 } => 5000,
    { oil: 200 } => 15000,
    { bread: 50 } => 25000
} */


//вариант заполнения бюджета из базы данных
const budget =[5000, 15000, 25000];
shops.forEach((shop,i)=>{
    map.set(shop, budget[i]);
});
console.log(map);
/* Map(3) {
    { rice: 500 } => 5000,
    { oil: 200 } => 15000,
    { bread: 50 } => 25000
} */


//get получаем наши значения
console.log(map.get(shops[0]));//5000
//has проверяем существует ли обьект в этой карте
console.log(map.has(shops[0]));//true

//удаляет что то из карты
map.delete(key);

//полностью очистить нашу карту
map.clear();

//количество эл внутри карты
map.size;

//возвращает итерируемый обьект по ключам
map.keys();




const shops = [
    {rice: 500},
    {oil: 200},
    {bread: 50}
]
const map = new Map();//создаем новую карту
const budget =[5000, 15000, 25000];
shops.forEach((shop,i)=>{
    map.set(shop, budget[i]);
});
console.log(map.keys());//[Map Iterator] { { rice: 500 }, { oil: 200 }, { bread: 50 } }
for (let shop of map.keys()) {
    console.log(shop);//{ rice: 500 }  { oil: 200 }  { bread: 50 }
}



const goods = [];
for (let shop of map.keys()) {
    goods.push(Object.keys(shop)[0]);
}
console.log(goods);//[ 'rice', 'oil', 'bread' ]



for (let price of map.values()){
    console.log(price);//5000  15000  25000
}


for (let price of map.entries()){
    console.log(price);
}
/* 
[ { rice: 500 }, 5000 ]
[ { oil: 200 }, 15000 ]
[ { bread: 50 }, 25000 ] 
*/


for (let [shop, price] of map.entries()){
    console.log(price, shop);
}
/* 
5000 { rice: 500 }
15000 { oil: 200 }
25000 { bread: 50 } 
*/




map.forEach((value, key, map)=>{
    console.log(key, value);
})
/* 
{ rice: 500 } 5000
{ oil: 200 } 15000
{ bread: 50 } 25000 
*/