// lesson 82 (JSON)
"use strict";

const persone = {
    name: 'Alex',
    tel:'+79837263664',
};
//конвертируем в JSON формат для отправки на сервер
console.log(JSON.stringify(persone));//{"name":"Alex","tel":"+79837263664"}

//конвертируем в обычный формат, когда с сервера получили данные JSON формата
console.log(JSON.parse(JSON.stringify(persone)));//{ name: 'Alex', tel: '+79837263664' }



//создаем клон обьекта, который не зависит от родителя 
const person = {
    name: 'Alex',
    tel:'+79837263664',
    parents:{
        mom:'Olga',
        dad:'Mike'
    }
};
//создаем клон обьекта
const clone= JSON.parse(JSON.stringify(person));
clone.parents.mom='Ann';
console.log(person);//{ name: 'Alex', tel: '+79837263664', parents: { mom: 'Olga', dad: 'Mike' }}
console.log(clone);//{ name: 'Alex', tel: '+79837263664', parents: { mom: 'Ann', dad: 'Mike' }}






