// lesson 61(1) (practice)
"use strict";



function amountOfPages(summary){
    if(summary<=9){
        console.log(summary);
        return summary;
    }else if (summary<=189) {
        summary=((summary-9)/2)+9;
        console.log(summary);
        return summary;
    } else if (summary<=1989){
        summary=((summary-189)/3)+99;
        console.log(summary);
        return summary;
    }
}
amountOfPages(1095);

//решение преподавателя
function amountOfPages(summary){
    let result = '';
    let n = 0;

    for (let i = 1; i <= summary; i++) {
      result += i;
      if (result.length === summary) {
        n = i;
        break;
      }
    }

    return n;
}
console.log(amountOfPages(25));