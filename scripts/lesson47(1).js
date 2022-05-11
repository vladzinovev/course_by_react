// lesson 47(1) (practice)
"use strict"





function factorial(n) {
    if( typeof(n)!=='number' || !Number.isInteger(n)){
        return "Ошибка, проверьте данные";
    } else if (n<=0){ 
        return 1;
    } else if (n===1){
        return n;
    } else{
        n = n * factorial(n-1); 
    }
    return n;
};


console.log(factorial(5));





















