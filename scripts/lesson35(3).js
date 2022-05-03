// lesson 35(2) (practice)
"use strict"





const someString = 'This is some strange string';

function reverse(str) {
    if (typeof(str) !== 'string') {
        return "Ошибка!";
    }
    // Самый оптимальный вариант решения
    console.log(str.split('').reverse().join(''));
    return str.split('').reverse().join('');

    // Решение при помощи цикла
    /* let newStr = '';
    for (let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr */
}
reverse(someString);

const baseCurrencies = ['USD', 'EUR'];
const additionalCurrencies = ['UAH', 'RUB', 'CNY'];
const allCurrencies =[...baseCurrencies, ...additionalCurrencies];

function availableCurr(arr, missingCurr) {
    let str='';
    if(arr.length===0){
        return `Нет доступных валют`;
    }
    else{
        let str=`Доступные валюты:\n`
        arr.forEach(element => {
            if (element !==missingCurr){
                str+=`${element}\n`;
            }
        });
        console.log(str);
        return str;
    }
}
availableCurr(allCurrencies,'CNY');