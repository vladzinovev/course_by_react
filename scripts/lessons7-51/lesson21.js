// lesson 21 (logical operators addition)
'use strict';
const hamburger = true;
const fries = true;
if (hamburger && fries){
    console.log('Я сыт');
}
console.log (hamburger && fries);


const chicken = 5;
const cola = 0;
if (chicken && cola){
    console.log('Я сыт');
}
console.log (chicken && cola);//0


const cheezburger = 2;
const sprite = 1;
const pepsi=3;
console.log (cheezburger === 2 && pepsi && sprite); //1
console.log (cheezburger === 2 && pepsi === 2 && sprite); // false
if (cheezburger === 3 && pepsi === 2 && sprite){
    console.log('Я сыт');
} else{
    console.log('Уходим в другой ресторан');
}
console.log (cheezburger === 3 && pepsi === 2 && sprite);


console.log(1 && 0); //0
console.log(1 && 5); //5
console.log(null && 5);  //null
console.log(5 && null);  //null
console.log(0 && 'dddd');  //0

//оператор "И" всегда возвращает первое ложеое знаечние
// если все занчение верны, то оператор "И" возвращает последнее значение


/* const nuggets = 0;
const icecream = 0;
const fanta=0;
if (nuggets || icecream || fanta){
    console.log('все довольны');
} else{
    console.log('Уходим в другой ресторан');
} */


let johnReport, 
    alexReport, 
    samReport, 
    mariaReport ="done";
console.log(johnReport || alexReport || samReport || mariaReport); //done


const nuggets = 3;
const icecream = 0;
const fanta=1;
const snikers = 5;
const burger =5;
console.log(nuggets === 4 && fanta || icecream && snikers && burger); //0
console.log(nuggets === 3 && fanta || icecream && snikers && burger); //1
console.log(nuggets === 2 && fanta || icecream && snikers && burger); //0
if (nuggets === 3 && fanta === 1|| icecream && snikers && burger){
    console.log('все довольны');
} else{
    console.log('Уходим в другой ресторан');
}


console.log(0); // false
console.log(!0); // true


console.log(0 || 1); //1
console.log(1 || 0); //1
console.log(1 || 5); //1
console.log(null || 5);  //5
console.log(5 || null);  //5
console.log(0 || 'dddd');  //dddd
console.log(null || undefined || 0); //0
