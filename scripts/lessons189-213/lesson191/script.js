const rndSum =a=> Math.random()+a;
console.log(rndSum(5));//5.72118400816729
console.log(rndSum(5));//5.227351883121837
console.log(rndSum(5));//5.590882311532207

//чистая функция-вегда возвращает одинаковый результат, когда в нее приходят одинаковые данные (зависит от аргументов, которые в нее приходят)
const sum =(a,b)=> b+a;
console.log(sum(5,10));//15
console.log(sum(5,10));//15
console.log(sum(5,10));//15

//не чистая
let num=10;
const nSum =a=> num+=a;
console.log(nSum(5));//15
console.log(nSum(5));//20
console.log(nSum(5));//25