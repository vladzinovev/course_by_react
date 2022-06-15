// lesson 80 (Rest оператор и параметры по умолчанию)
"use strict";

//оператор rest
const log = function(a,b,...rest){
    console.log(a,b,rest);
};
log('basic','rest','operator','usage');//basic rest [ 'operator', 'usage' ]

const log = function(a,b,...rest){
    console.log(a,b,...rest);
};
log('basic','rest','operator','usage');//basic rest operator usage

//параметры по умоланию
//новый вариант
function calcOrDouble(number,basis=2){ 
    console.log(number*basis);
}

/* //старый вариант
function calcOrDuble(number,basis){
    basis=basis||2; //если не указали зачение basis
    console.log(number*basis);
}
*/

calcOrDouble(3,5);//15
calcOrDouble(3);//6





