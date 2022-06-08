// lesson 80 (Rest оператор и параметры по умолчанию)
"use strict";

//оператор rest
const log = function(a,b,...rest){
    console.log(a,b,rest);
};
log('basic','rest','operator','usage');//basic rest [ 'operator', 'usage' ]


//параметры по умоланию
//новый вариант
function calcOrDuble(number,basis=2){
    basis=basis||2; //если не указали зачение basis
    console.log(number*basis);
}
//или старый вариант
/* 
function calcOrDuble(number,basis){
    basis=basis||2; //если не указали зачение basis
    console.log(number*basis);
}
 */
calcOrDuble(3,5);//15
calcOrDuble(3);//6





