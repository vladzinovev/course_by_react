// lesson 96 (создание регулярных выражений) 
"use strict";


new RegExp ('pattern','flags');
//    /pattern/f.....

const ans = "ANnn";

//ищем все маленькие буквы n
let reg = /n/;

//-1 - нет таких букв; 0 ... бесконечн - указывает индекс буквы
console.log(ans.search(reg));//2
console.log(ans.match(reg));//[ 'n', index: 2, input: 'ANnn', groups: undefined ]


//i-хотим найти внезависимости от регистра
reg = /n/i;
console.log(ans.search(reg));//1
console.log(ans.match(reg));//[ 'n', index: 2, input: 'ANnn', groups: undefined ]


//g-найти сразу нксолько вхождений (c методом serach не работает)
reg = /n/g;
console.log(ans.search(reg));//2
console.log(ans.match(reg));//[ 'n', 'n' ]
//m-многострочный режим, не только в одну строку, но и с переносами
reg = /n/m;
console.log(ans.search(reg));//2
console.log(ans.match(reg));//[ 'n', index: 2, input: 'ANnn', groups: undefined ]
// или 
reg = /n/igm;
console.log(ans.search(reg));//1
console.log(ans.match(reg));//[ 'N', 'n', 'n' ]


const pass= 'Password...';
console.log(pass.replace(/./g, "*"));//***********
console.log(pass.replace(/\./g, "*"));//Password***

console.log('12-22-50'.replace(/-/g, ":"));//12:22:50







