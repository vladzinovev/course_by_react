// lesson 75 (classes)
"use strict";



class Rectangle {
    constructor(height,width){
        this.height=height;
        this.width=width;
    }

    calcArea(){
        return this.height*this.width;
    }
}

const square =new Rectangle (10,10);
console.log(square.calcArea());//100
const long =new Rectangle (20,100);
console.log(long.calcArea());//2000


//наследуем клаcс
class ColoredRectangleWithText extends Rectangle {
    constructor(height,width,text,bgColor){
        super(height,width);//super означает, что this.height=height; и this.width=width;
        this.text=text;
        this.bgColor=bgColor;
    }
    showMyProps(){
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello world','red');
div.showMyProps();//Текст: Hello world, цвет: red
console.log(div.calcArea());//250











