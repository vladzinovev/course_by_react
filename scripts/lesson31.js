// lesson 31 (callback functions)
"use strict"




function first(){
    setTimeout(function(){
        console.log(1);
    },500);
}

function second(){
    console.log(2);
}

first();
second();

//первый вариант
function learnJS(lang,callback){
    console.log(`Я учу: ${lang}`);
    callback();
}
learnJS('JavaScript' , function(){
    console.log('Я прошел этот урок');
});

//второй вариант
function learnsJS(lang,callback){
    console.log(`Я учу: ${lang}`);
    callback();
}
function done(){
    console.log('Я прошел этот урок');
}
learnsJS('JavaScript', done);




