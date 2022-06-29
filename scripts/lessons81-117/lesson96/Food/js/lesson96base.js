// lesson 96 (создание регулярных выражений) 
"use strict";


new RegExp ('pattern','flags');
//    /pattern/f.....

const ans = "ANnn";

//ищем все маленькие буквы n
let reg = /n/;

//-1 - нет таких букв; (0 ... бесконечн) - указывает индекс буквы
console.log(ans.search(reg));//2
console.log(ans.match(reg));//[ 'n', index: 2, input: 'ANnn', groups: undefined ]


//i-хотим найти внезависимости от регистра
reg = /n/i;
console.log(ans.search(reg));//1
console.log(ans.match(reg));//[ 'n', index: 2, input: 'ANnn', groups: undefined ]


//g-найти сразу нусколько вхождений (c методом serach не работает)
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

//-------------------

const pass= 'Password...';
console.log(pass.replace(/./g, "*"));//***********
console.log(pass.replace(/\./g, "*"));//Password***
//-------------------
console.log('12-22-50'.replace(/-/g, ":"));//12:22:50
//-------------------

const answer = "ANnn";
let regs = /n/;
//tset- выводит true или false на совпадение
console.log(answer.test(regs));//true



// \d ищем цифры
// \w ищем все слова (все буквы)
// \s ищем все пробелы

const num = "ABC4dfg";
let n = /\d/;
console.log(num.match(n));//[ '4', index: 3, input: 'ABC4dfg', groups: undefined ]

const str ='My name is R2R2';
//находим R2R2 буква-цифра-буква-цифра
console.log(str.match(/\w\d\w\d/i));//[ 'R2R2', index: 11, input: 'My name is R2R2', groups: undefined ]


//обратные классы
// \D -ищем не цифры
console.log(str.match(/\D/ig));//['M', 'y', ' ', 'n', 'a', 'm', 'e', ' ','i', 's', ' ', 'R','R']
// \W -ищем не буквы
console.log(str.match(/\W/ig));//[ ' ', ' ', ' ' ]


