// lesson 29(3) (practice)
"use strict"


// Место для первой задачи
function getTimeFromMinutes(count) {
    if(typeof(count) !=="number" || count<0 || !Number.isInteger(count)){
        return "Ошибка, проверьте данные";
    }else{
        if(count<=59 && count>=0 ){
            return `Это 0 часов и ${count} минут`
        }else{
            let h,m;
            h=parseInt(count/60);
            m=count-h*60;
            let hours = '';
            switch (h) {
                case 1:
                    hours = 'час';
                    break;
                case 2:
                case 3:
                case 4:
                    hours = 'часа';
                    break;
                default:
                    hours = 'часов';
            }
            return `Это ${h} ${hours} и ${m} минут`;
        }
        
    }
}
console.log(getTimeFromMinutes(400));

// Место для второй задачи
function findMaxNumber(num1,num2,num3,num4) {
    if(typeof(num1) !== 'number' || typeof(num2) !== 'number' || typeof(num3) !== 'number' || typeof(num4) !== 'number'){
        return 0;
    } else{
        return Math.max(num1, num2 ,num3, num4);
    }

}
console.log(findMaxNumber(1,5,6.6,11));



/* 
function getTimeFromMinutes(minutesTotal) {
    if (typeof(minutesTotal) !== 'number' || minutesTotal < 0 || !Number.isInteger(minutesTotal)) {
        return "Ошибка, проверьте данные";
    }

    const hours = Math.floor(minutesTotal / 60);
    const minutes = minutesTotal % 60;

    let hoursStr = '';

    switch (hours) {
        case 0: 
            hoursStr = 'часов';
            break;
        case 1:
            hoursStr = 'час';
            break;
        case 2:
        case 3:
        case 4:
            hoursStr = 'часа';
            break;
        default:
            hoursStr = 'часов';
    }

    return `Это ${hours} ${hoursStr} и ${minutes} минут`;
}

getTimeFromMinutes(180)

function findMaxNumber(a, b ,c, d) {
    // Самое простое - это использовать Math.max :)
    // А оптимизировать такую проверку мы научимся совсем скоро
    if (typeof(a) !== 'number' ||
        typeof(b) !== 'number' ||
        typeof(c) !== 'number' ||
        typeof(d) !== 'number') {
        return 0;
    } else {
        return Math.max(a, b ,c, d);
    }
}

findMaxNumber(1, 5, 6.6, 10.5);
findMaxNumber(1, 5, '6', '10'); */