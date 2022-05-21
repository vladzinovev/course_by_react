// lesson 61 (BigInt)
"use strict"


console.log(Number.MAX_SAFE_INTEGER);//9007199254740991

//создаем большие числа

const bigint = 9595847473595857744737464n;
const sameBigInt = BigInt(934947575843736476466464);

console.log(typeof(bigint));//bigint
console.log(typeof(sameBigInt));//bigint

console.log(5n + 1);//ошибка
console.log(Math.round(5n));//ошибка
console.log(5n + 1n);//6n
console.log(5n / 2n);//2n получаем округленный результат

console.log(5n > 1n);//true
console.log(5n > 2);//true
console.log(2n > 5);//false


let bigIntTwo=2n;
let number = 2;
console.log(bigIntTwo + BigInt(number));//4n
console.log(Number(bigIntTwo) + number);//4



