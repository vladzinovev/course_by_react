
//1
const log = function(a,b,...rest){
    console.log(a,b,...rest);
};
log('basic','rest','operator','usage');//basic rest operator usage

//2
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return a + b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);//undefined 9
function getSum(a, b) {
    function sum() {
        console.log(this.a);
        return this.a + this.b;
    }
 
    console.log(sum());
}
 
getSum(4, 5);//undefined NaN
//ничего, будет ошибка

//3
//все вышеперечисленное кроме номера 3

//4
class Slider {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
 
    showSliderWidth() {
        console.log(this.width);
    }
}
 
const slider = new Slider('500px', '150px');
 
slider.showSliderWidth();//500px

//5
//Какого метода не существует у свойства classList? .includes()

//6
//Какое свойство отвечает за ширину элемента, включая только сам контент и padding? clientWidth

//7
//extends

//8
//В чем ключевая разница между методами call и apply? call-строка, apply-массив

//9
const urlObj = {
    protocol: 'https',
    domain: 'mysite.com',
    showCurrentURL: function() {
        const extractCurrDomain = () => {
            return this.domain;
        };
        const extractCurrProtocol = () => {
            return this.protocol;
        };
        console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`);
    }
};
 
urlObj.showCurrentURL();//https://mysite.com

//10
const urlObj = {
    protocol: 'https',
    domain: 'mysite.com'
};
 
function showCurrentURL() {
    const extractCurrDomain = () => {
        return this.domain;
    };
    const extractCurrProtocol = () => {
        return this.protocol;
    };
    console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`);
}
 
const url = showCurrentURL.bind(urlObj);
console.log(url);//[Function: bound showCurrentURL]

//11
//Свойство объекта события event.code позволяет получить... Код физической клавиши, которая была нажата. 

//12
//Для чего необходимо сохранять уникальный идентификатор таймера?

const timerId = setInterval(func, 2000);
//Для того чтобы остановить таймер













