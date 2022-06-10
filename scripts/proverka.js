console.log(document.body);
console.log(document.head);
console.log(document.documentElement); //содержимое всей html страницы

console.log(document.body.childNodes); //все дети у body
console.log(document.body.firstChild); //получить первого ребенка у body
console.log(document.body.lastChild); //получить последнего ребенка у body

console.log(document.querySelector('#current').parentNode);//получить родителя current
console.log(document.querySelector('#current').parentNode.parentNode);//получить (деда) current =родителя родителя current

//получаем по атрибуту html следующий эл
console.log(document.querySelector('[data-current="3"]').nextSibling);
//получаем по атрибуту html предыдущий эл
console.log(document.querySelector('[data-current="3"]').previousSibling);