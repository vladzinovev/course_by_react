// lesson 41 (task)
"use strict"





/* 
Какое будет выведено значение: let x = 5; alert( x++ ); ?
Чему равно такое выражение: [ ] + false - null + true ?
Что выведет этот код: let y = 1; let x = y = 2; alert(x); ?
Чему равна сумма [ ] + 1 + 2?
Что выведет этот код: alert("1"[0] )?
Чему равно 2 && 1 && null && 0 && undefined ?
Есть ли разница между выражениями? !!( a && b ) и (a && b)?
Что выведет этот код: alert( null || 2 && 3 || 4 ); ?
a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ?
Что выведет этот код: alert( +"infinity"); ?
Верно ли сравнение: "Ёжик" > "Яблоко";?
Чему равно 0 || "" || 2 || undefined || true || falsе ? 
*/

//1
let ab = 5; 
console.log(ab++); //5
//2
console.log([ ] + false - null + true); //NaN
//3
let y = 1; 
let x = y = 2; 
console.log(x); //2
//4
console.log([]+ 1 + 2);//12
//5
console.log("1"[0]); //1
//6
console.log(2 && 1 && null && 0 && undefined); //false (null)
//7
console.log(!!(a && b)); // false
console.log(a && b); // true
//8
console.log(null || 2 && 3 || 4); //3
//9
let a = [1, 2, 3], b = [1, 2, 3];
console.log(a == b );//false
//10
console.log( +"infinity"); //infinity
//11
console.log("Ёжик" > "Яблоко");//false
//12
console.log(0 || "" || 2 || undefined || true || falsе); //2





