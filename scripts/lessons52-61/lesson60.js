// lesson 59 (Set)
"use strict"

const arr = [1, 1, 2, 2, 3, 4, 5, 6, 5];

const set = new Set(arr);
console.log(set); // Set(6) { 1, 2, 3, 4, 5, 6 } (без числовых повторений)


const arrName = ['Alex', 'Ann', 'Oleg', 'Alex'];

const setName = new Set(arrName);


console.log(setName);//Set(3) { 'Alex', 'Ann', 'Oleg' } (без повторений имен)

setName.add('Oleg');
setName.add('Ivan');
console.log(setName);//Set(4) { 'Alex', 'Ann', 'Oleg', 'Ivan' }


//можем удалить
set.delete(value);
//можем проверять и помещать
set.has(value);
//можем очичтить
set.clear(value);
//можем получить размер

for (let value of setName) console.log(value);//Alex  Ann  Oleg  Ivan

setName.forEach((value, valueAgaing,set)=>{
    console.log(value, valueAgaing);//Alex Alex  Ann Ann  Oleg Oleg  Ivan Ivan
})

console.log(setName.values());//[Set Iterator] { 'Alex', 'Ann', 'Oleg' }

console.log(setName.keys());//[Set Iterator] { 'Alex', 'Ann', 'Oleg' }

console.log(setName.entries());
/* [Set Entries] {
    [ 'Alex', 'Alex' ],
    [ 'Ann', 'Ann' ],
    [ 'Oleg', 'Oleg' ]
} */

function unique(arrName) {
    return Array.from(new Set(arrName));
}
console.log(unique(arrName));//[ 'Alex', 'Ann', 'Oleg' ]