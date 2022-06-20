// lesson 86 (Promise) (обещание)
"use strict";

//1 пример
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


//2 пример
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
    
        resolve(product);
    },2000);
});
//then выполняется на promise в случае положительного исхода
req.then((product)=>{
    setTimeout(()=>{
        product.status='order';
        console.log(product);
    },2000);
});

//Вывод консоли:
/* 
Запрос данных ...
Подготовка данных...
{ name: 'TV', price: 2000, status: 'order' }
*/



//3 пример
console.log('Запрос данных ...');
//resolve наше обещание выполонилось
//reject наше обещание не выполнилось
const req1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Подготовка данных...');
    
        const product = {
            name:'TV',
            price:2000
        };
    
        resolve(product);
    },2000);
});
//then выполняется на promise в случае положительного исхода
req1.then((product)=>{
    const req2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            product.status='order';
            resolve(product);
        },2000);
    });

    req2.then(data=>{
        console.log(data);
    });
});

//Вывод консоли:
/* 
Запрос данных ...
Подготовка данных...
{ name: 'TV', price: 2000, status: 'order' }
*/

//4 пример модификация 3 примера 
console.log('Запрос данных ...');
//resolve наше обещание выполонилось
//reject наше обещание не выполнилось
const req4 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Подготовка данных...');
    
        const product = {
            name:'TV',
            price:2000
        };
    
        resolve(product);
    },2000);
});
//then выполняется на promise в случае положительного исхода
req4.then((product)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            product.status='order';
            resolve(product);
        },2000);
    });
}).then(data=>{
    console.log(data);
});
//Вывод консоли:
/* 
Запрос данных ...
Подготовка данных...
{ name: 'TV', price: 2000, status: 'order' }
*/

//5 пример
console.log('Запрос данных ...');
//resolve наше обещание выполонилось
//reject наше обещание не выполнилось
const req5 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Подготовка данных...');
    
        const product = {
            name:'TV',
            price:2000
        };
    
        resolve(product);
    },2000);
});
//then выполняется на promise в случае положительного исхода
req5.then((product)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            product.status='order';
            resolve(product);
        },2000);
    });
}).then(data=>{
    data.modify=true;
    return data;
}).then(db=>{
    console.log(db);
});

//Вывод консоли:
/* 
Запрос данных ...
Подготовка данных...
{ name: 'TV', price: 2000, status: 'order', modify: true }
*/



//reject
//catch в случае ошибки
//6 пример
console.log('Запрос данных ...');
//resolve наше обещание выполонилось
//reject наше обещание не выполнилось
const req6 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Подготовка данных...');
    
        const product = {
            name:'TV',
            price:2000
        };
    
        resolve(product);
    },2000);
});
//then выполняется на promise в случае положительного исхода
req6.then((product)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            product.status='order';
            reject();
        },2000);
    });
}).then(data=>{
    data.modify=true;
    return data;
}).then(db=>{
    console.log(db);
}).catch(()=>{
    console.log('Произошла ошибка');
});
//Вывод консоли:
/* 
Запрос данных ...
Подготовка данных...
Произошла ошибка
*/



//finally действия которые производятся всегда
//7 пример
console.log('Запрос данных ...');
//resolve наше обещание выполонилось
//reject наше обещание не выполнилось
const req7 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log('Подготовка данных...');
    
        const product = {
            name:'TV',
            price:2000
        };
    
        resolve(product);
        reject();
    },2000);
});
//then выполняется на promise в случае положительного исхода
req7.then((product)=>{
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            product.status='order';
            resolve(product);
        },2000);
    });
}).then(data=>{
    data.modify=true;
    return data;
}).then(db=>{
    console.log(db);
}).catch(()=>{
    console.log('Произошла ошибка');
}).finally(()=>{
    console.log('Finall');
});
//Вывод консоли:
/* 
Запрос данных ...
Подготовка данных...
{ name: 'TV', price: 2000, status: 'order', modify: true }
Finall
*/



//8 пример
const test = time=>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve(), time);
    });
};

test(1000).then(()=> console.log('1000 ms'));//1000 ms
test(2000).then(()=> console.log('2000 ms'));//2000 ms

//9 пример схож с 8 пример, но тут отслеживаем через all, чтобы все promise авершились
const test2 = time=>{
    return new Promise(resolve=>{
        setTimeout(()=>resolve(), time);
    });
};

//all ожидает выполнение всех promise
Promise.all([test2(1000), test2(2000)]).then(()=>{
    console.log('ALL');//ALL (сработает через две секунды)
});

//race ожидает выполнение первого promise
Promise.race([test2(1000), test2(2000)]).then(()=>{
    console.log('ALL');//ALL (сработает через одну секунду)
});










