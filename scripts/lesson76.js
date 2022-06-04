// lesson 76 (Контекст вызова.This)
"use strict";


//1) обычная функция this =window, но если включить use strict=undefind;
function showThis(){
    console.log(this);
    function sum(){
        console.log(this);
        //return this.a + this.b; //не сработает
        return a + b;
    }
}
showThis(4,5);

//2)контекст у методов обьектов - сам обьект
const obj={
    a:20,
    b:10,
    sum:function(){
        console.log(this);
    }
}
obj.sum();//{ a: 20, b: 10, sum: [Function: sum] }

const object={
    a:20,
    b:10,
    sum:function(){
        function shout(){
            console.log(this);
        }
        shout();
    }
}
object.sum();//при use strict будет undefind















