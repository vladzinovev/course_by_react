// lesson 68 (Работа с датой)
"use strict"

const now = new Date();
console.log(now);//2022-05-26T20:41:37.326Z
//получаем год
console.log(now.getFullYear());//2022
//получаем месяц
console.log(now.getMonth());//4
//получаем день
console.log(now.getDate());//26
//получаем день недели начиная с вс
console.log(now.getDay());//4 четверг
//получаем часы 
console.log(now.getHours());//23
//получаем часы пояса
console.log(now.getUTCHours());//20
//получаем разницы между часовым поясом и UTC
console.log(now.getTimezoneOffset());//-180 (3 часа)
//получаем сколько прошло секунд от 1970 года
console.log(now.getTime());//1653598336202

const my = new Date('2022-10-10');
console.log(my);//2022-10-10T00:00:00.000Z

const myDate = new Date(2022, 5, 1, 20);
console.log(myDate);//2022-06-01T17:00:00.000Z  (часовой пояс +3)

//передаем в секундах
const myDate2 = new Date(0);
console.log(myDate2);//1970-01-01T00:00:00.000Z (начало отсчета)

//передаем в секундах
const myDate3 = new Date(-10);
console.log(myDate3);//1969-12-31T23:59:59.990Z (от начала отсчета)