// lesson 96 (создание регулярных выражений) 
"use strict";


new RegExp ('pattern','flags');
//    /pattern/f.....

const ans = prompt('ВВедите ваше имя');

//ищем все маленькие буквы n
const reg = /n/;
//i-хотим найти внезависимости от регистра
//const reg = /n/i;
//g-найти сразу нксолько вхождений
//const reg = /n/g;
//m-многострочный режим, не только в одну строку, но и с переносами
//const reg = /n/m;
// или const reg = /n/igm;

//-1 - нет таких букв; 1 ... бесконечн - указывает индекс буквы
console.log(ans.search(reg));










