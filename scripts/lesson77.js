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
















