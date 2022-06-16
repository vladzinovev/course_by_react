// lesson 86 (Promise) (обещание)
"use strict";


console.log('Запрос данных ...');

setTimeout(()=>{
    console.log('Подготовка данных...');

    const product = {
        name:'TV',
        price:2000
    };

    setTimeout(()=>{
        product.status='order';
        console.log(product);
    },2000);
},2000);

//Вывод консоли:
/* 
Запрос данных ...
Подготовка данных...
{ name: 'TV', price: 2000, status: 'order' }
*/

console.log('Запрос данных ...');
//resolve наше обещание выполонилось
//reject наше обещание не выполнилось
const req = new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Подготовка данных...');
    
        const product = {
            name:'TV',
            price:2000
        };
    
        resolve();
    },2000);
});
//then выполняется на promise в случае положительного исхода
req.then(()=>{
    console.log('Данные успешно получены')
});

setTimeout(()=>{
    product.status='order';
    console.log(product);
},2000);










