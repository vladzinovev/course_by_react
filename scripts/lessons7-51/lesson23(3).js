// lesson 23(3) (practice)
"use strict"

/* 
      *
     ***
    *****
   *******
  *********
 ***********
 */

const lines =5;
let result = '';
for (let i=0; i<=lines;i++){

    for (let j = lines; j>i; j--){
        result +=" ";
    }
    for (let j = 0; j<i*2+1; j++){
        result +="*";
    }
    result +="\n";
}
console.log(result);

//or
/* 
const lines = 5;
let result = '';

for (let i = 0; i <= lines; i++) {
    for (let j = 0; j < lines - i; j++) {
        result += " ";
    }
    for (let j = 0; j < 2 * i + 1; j++) {
        result += "*";
    }
    result += "\n";
}
 
console.log(result) */
