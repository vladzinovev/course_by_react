// lesson 80 (Rest оператор и параметры по умолчанию)
"use strict";

//оператор rest
const log = function(a,b,...rest){
    console.log(a,b,rest);
};
log('basic','rest','operator','usage');//basic rest [ 'operator', 'usage' ]










