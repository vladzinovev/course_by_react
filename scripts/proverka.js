function isPangram(string) {
    for (let i=0; i<string.length; i++){
        if(string[i]==string[i+1]){
            console.log(string[i]);
            return true;
        }else{}
    }
    console.log('false');
    return false;
}
isPangram("The quick");
//isPangram("The quick brown fox jumps over the lazy dog");


const object1 = {};

Object.defineProperty(object1, 'property1', {
  values: 42,
  writable: false
});

// throws an error in strict mode

console.log(object1.property1);
// expected output: 42


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