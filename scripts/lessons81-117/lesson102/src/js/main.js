// lesson 102 (webpack) 
'use strict';



function myModule() {
    this.hello = function(){
        console.log('hello');
    };
    this.goodbye=function(){
        console.log('bye!');
    };
}

//синтаксис commandjs для нашей функции в общий js файл
module.exports=myModule;