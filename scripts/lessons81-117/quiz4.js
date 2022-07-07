//1 Каким образом можно превратить JSON-объект, который нам приходит от сервера, в обычный js-объект?
JSON.parse();

//2 Можно ли при помощи fetch и XMLHttpRequest сделать одно и тоже?
//нет

//3 что выведит
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('foo');
    }, 300);
});
promise.then((value) => {
    console.log(value);
});
//'foo'

//4 Команда Promise.all() необходима для того, чтобы...
//узнать,когда будут выполнены все промисы

//5 Какое сообщение будет выведено в консоль при таком коде?
const p1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 1000, "one");
});
const p2 = new Promise((resolve, reject) => {
    setTimeout(resolve, 2000, "two");
});
const p3 = new Promise((resolve, reject) => {
        setTimeout(resolve, 3000, "three");
});
const p4 = new Promise((resolve, reject) => {
    setTimeout(resolve, 4000, "four");
});
const p5 = new Promise((resolve, reject) => {
    reject("reject");
});
Promise.all([p1, p2, p3, p4, p5]).then(value => {
    console.log(value);
}, reason => {
    console.log(reason);
});
//[ 'one', 'two', 'three', 'four' ]

//6 Полезными свойствами метода массивов filter являются:
//фильтрация массива по заданной функци создание нового, отфильтрованного массива как результат работы

//7 Какое число будет содержаться в переменной result?
const arr = [5, 6, 11, 20, 3];
const result = arr.reduce((sum, curr) => sum + curr, 10);
console.log(result);
//55

//8 Что будет содержаться в переменной result в результате работы кода?
const array = [
    {
        name: 'Alex',
        salary: 500
    },
    {
        name: 'Ann',
        salary: 1500
    },
    {
        name: 'John',
        salary: 2500
    },
];
const res = array.map(item => Object.entries(item)[1][1]).reduce((sum, curr) => sum + curr);
console.log(res);
//4500

//9 Какое сообщение будет выведено в консоль?
console.log('convert me please'.replace(/ /g, '_'));
//convert_me_please

//10 Для чего нам может понадобится команда Promise.race() ?
//для определения того, какой из промисов переданных в нее выполнится первым

//11 Через сколько секунд данный код выведет в консоль сообщение? И что именно будет в консоли?
const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
 
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
function one() {
    const promises = [a(), b(), c()];
    Promise.all(promises).then(values => console.log(values));
}
one();
//через 5 секунд [a c b]

//12 При помощи какой команды можно получить данные из localStorage в поле с названием 'user'? 
localStorage.getItem('user');

//13 Через сколько секунд данный код выведет в консоль сообщение? И что именно будет в консоли?
const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
async function two() {
    const promises = [a(), b(), c()];
    const outpu1 = await Promise.race(promises);
    return `two is done: ${outpu1}`;
}
two().then(console.log);
//через 100мс, two is done:a

//14 Через сколько секунд данный код выведет в консоль сообщение? И что именно будет в консоли?
const promisify = (item, delay) =>
    new Promise(resolve => setTimeout(() => resolve(item), delay));
const a = () => promisify('a', 100);
const b = () => promisify('b', 5000);
const c = () => promisify('c', 3000);
async function three() {
const outpu1 = await a();
const outpu2 = await b();
const outpu3 = await c();
return `three is done: ${outpu1} ${outpu2} ${outpu3}`
}

three().then(console.log);
//three is done: a b c

//15 При помощи регулярных выражений можно:
//все вышеперечисленное
