// lesson 60 (Set)
"use strict";

const arr = [1, 1, 2, 3, 2, 4, 6, 5, 5, 7];

const set = new Set(arr);
console.log(set); // Set(7) { 1, 2, 3, 4, 6, 5, 7 } (без числовых повторений)


const arrName = ['Alex', 'Ann', 'Oleg', 'Alex'];

const setName = new Set(arrName);
//console.log(setName);//Set(3) { 'Alex', 'Ann', 'Oleg' } (без повторений имен)

setName.add('Oleg');
setName.add('Ivan');
console.log(setName);//Set(4) { 'Alex', 'Ann', 'Oleg', 'Ivan' }

console.log(setName.size);//4

setName.clear();
console.log(setName);//Set(0) {}


//можем удалить эл
set.delete(value);
//можем проверять и помещать
set.has(value);
//можем очистить весь массив
set.clear();
//можем получить размер
set.size;

for (let value of setName) console.log(value);//Alex  Ann  Oleg  Ivan

setName.forEach((value, valueAgaing,set)=>{
    console.log(value, valueAgaing);//Alex Alex  Ann Ann  Oleg Oleg  Ivan Ivan
});

console.log(setName.values());//[Set Iterator] { 'Alex', 'Ann', 'Oleg', 'Ivan' }

console.log(setName.keys());//[Set Iterator] { 'Alex', 'Ann', 'Oleg', 'Ivan' }

console.log(setName.entries());
/* [Set Entries] {
    [ 'Alex', 'Alex' ],
    [ 'Ann', 'Ann' ],
    [ 'Oleg', 'Oleg' ]
    [ 'Ivan', 'Ivan' ]
} */

function unique(arrName) {
    return Array.from(new Set(arrName));
}
console.log(unique(arrName));//[ 'Alex', 'Ann', 'Oleg' ]
console.log(unique(setName));//[ 'Alex', 'Ann', 'Oleg', 'Ivan' ]