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
showThis();














