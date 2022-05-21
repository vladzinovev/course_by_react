// lesson 61(3) (practice)
"use strict"



function deepCount(a){
    let count = a.length;
    for (let i=0; i<a.length; i++) {
        if (Array.isArray(a[i])) {
            count += deepCount(a[i]);
        }

    }
    return count;
}
let arr = [1,2,3,[5,[6]],10,11,[12,[13]]];
console.log(deepCount(arr));

