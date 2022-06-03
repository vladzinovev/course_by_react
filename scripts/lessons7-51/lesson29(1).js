// lesson 29(1) (practice)
"use strict";



// Место для первой задачи
function calculateVolumeAndArea(num) {
    if(typeof(num) !=="number" || num<0 || !Number.isInteger(num)){
        return `При вычислении произошла ошибка`;
    }
    else{
        let V = num *num *num,
            S = num*num *6;
        return `Объем куба: ${V}, площадь всей поверхности: ${S}`;
    }
}
console.log(calculateVolumeAndArea(1.8));

// Место для второй задачи
function getCoupeNumber(count) {
    if(typeof(count)!=="number" || count<0 || !Number.isInteger(count)){
        return `Ошибка. Проверьте правильность введенного номера места`;
    }
     else if(count===0 || count >36){
        return `Таких мест в вагоне не существует`;
    } else{
        for (let i = 4; i <= 36; i = i + 4) {
            if (count <= i) {
                return Math.ceil(i / 4);
            }
        }
    }
}
console.log(getCoupeNumber(37.5));






/* 

function calculateVolumeAndArea(length) {
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        return "При вычислении произошла ошибка";
    }

    let volume = 0,
        area = 0;
    
    volume = length * length * length;
    // length ** 3 - это тоже самое, что и выше или варианты через цикл.
    // ** - это оператор степени, напоминаю. Но онлайн редактор его не принимает =/
    area = 6 * (length * length);

    return `Объем куба: ${volume}, площадь всей поверхности: ${area}`;
}

calculateVolumeAndArea(5);

function getCoupeNumber(seatNumber) {
    if (typeof(seatNumber) !== 'number' || seatNumber < 0 || !Number.isInteger(seatNumber)) {
        return "Ошибка. Проверьте правильность введенного номера места";
    }

    if (seatNumber === 0 || seatNumber > 36) {
        return "Таких мест в вагоне не существует";
    }

    for (let i = 4; i <= 36; i = i + 4) {
        if (seatNumber <= i) {
            return Math.ceil(i / 4);
        }
    }
    // тут очень много вариантов решения, но выбрал один из элегантных :)
}

getCoupeNumber(33); */