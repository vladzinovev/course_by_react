// lesson 50 (async, defer, dynamic scripts)
"use strict"


const p = document.querySelectorAll('p');
console.log(p);

//defer помогает выполнить script когда html выполнена
// with <script defer src="./scripts/lesson50.js"></script>
//в console length:2

// with <script src="./scripts/lesson50.js"></script>
//в console length:0


//async запускается как только был загружен и никого не ждет
//кто из async первый загрузится тот и запустится
//пример <script async src="./scripts/lesson50.js"></script>

const script = document.createElement('script');
script.src = "js/test.js";
script.async= false;
document.body.append(script);

function loadScript(src){
    const script = document.createElement('script');
    script.src = src;
    script.async= false;
    document.body.append(script);   
}

loadScript("js/test.js");
loadScript("js/some.js");



