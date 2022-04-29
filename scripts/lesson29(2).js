// lesson 29(2) (practice)
"use strict"


function fib(num) {
    let text =0;
    let a=0, b=1, c=1;
    if(typeof(num) !=="number" || num<=0 || !Number.isInteger(num)){
        return "";
    }
    else{
        if(num===1){
            return text;
        }else if(num===2){
            text +=` `;
            text +=`${b}`;
            return text;
        }else{
            text +=` `;
            text +=`${b}`;
            for (i=1;i<num-1;i++){
                c=a+b;
                a=b;
                b=c;
                text +=` `;
                text +=`${b}`;
            }
            return text;
        }
    }
    
}
console.log(fib(0));



/* 
function fib(num) {
    if (typeof(num) !== 'number' || num <= 0 || !Number.isInteger(num)) {
        return "";
    }

    let result = '';
    let first = 0;
    let second = 1;

    for (let i = 0; i < num; i++) {
        if (i + 1 === num) {
            result += `${first}`;
            // Без пробела в конце
        } else {
            result += `${first} `;
        }

        let third = first + second;
        first = second;
        second = third;
    }

    return result;
}

fib(5) */