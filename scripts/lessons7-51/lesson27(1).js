// lesson 27(1) (practice)
"use strict";


// Место для первой задачи
function sayHello(name) {
    return `Привет, ${name}`;
}
console.log(sayHello('Andrey'));

// Место для второй задачи
function returnNeighboringNumbers(number) {
    const arr=[];
    for(let i=0;i<=2;i++){
        arr[i]=number-1;
        number++;
    }
    return arr;
}
console.log(returnNeighboringNumbers(5));

// Место для третьей задачи
function getMathResult(base,degree) {
    let text=base;
    if(typeof(degree)==='number' && base>0){
        for(let i=2;i<=degree;i++){
            text += '---';
            text +=Math.pow(base,i);
        }
        return text;
    }
    else{
        return base;
    }

}
console.log(getMathResult(5,4));

//or
// Место для третьей задачи
function getMathResult(base,degree) {
    let text=base;
    if(typeof(degree)==='number' && base>0){
        for(let i=2;i<=degree;i++){
            text += '---';
            if (i === degree) {
                text += `${base * i}`;
            } else {
                text += `${base * i}`;
            }
        }
        return text;
    }
    else{
        return base;
    }

}
console.log(getMathResult(5,4));


/* 

function sayHello(name) {
    return `Привет, ${name}!`;
}

sayHello('Alex');

function returnNeighboringNumbers(num) {
    return [num - 1, num, num + 1];
}

returnNeighboringNumbers(5);

function getMathResult(num, times) {
    if (typeof(times) !== 'number' || times <= 0) {
        return num;
    }

    let str = '';

    for (let i = 1; i <= times; i++) {
        if (i === times) {
            str += `${num * i}`;
            // Тут без черточек в конце
        } else {
            str += `${num * i}---`;
            // Это тоже самое, что и
            // str = str + num * i + "---"
        }
    }

    return str;
}

getMathResult(10, 5); */



