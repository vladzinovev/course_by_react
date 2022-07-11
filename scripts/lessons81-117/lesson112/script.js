// lesson 112 (requestAnimationFrame) 
'use strict';

const btn = document.querySelector('.btn'),
      elem = document.querySelector('.box');  
let pos = 0;

//страый варинт запуска анимации
// function myAnimation() {
//     let pos = 0;
//     const id = setInterval(frame, 10);
//     function frame() {
//         if (pos == 300) {
//             clearInterval(id);
//         } else {
//             pos++;
//             elem.style.top = pos + "px";
//             elem.style.left = pos + 'px';
//         }
//     }
// }
//btn.addEventListener('click',myAnimation);

//новый вариант запуска анимации
function myAnimation() {
    pos++;
    elem.style.top = pos + "px";
    elem.style.left = pos + 'px';

    if (pos < 300) {
        requestAnimationFrame(myAnimation);
    }
}
//внутри стрелочная функция, чтобы сразу не вызывалась, а только после click
btn.addEventListener('click', () => requestAnimationFrame(myAnimation));

let id = requestAnimationFrame(myAnimation);
//отменяем анимацию
cancelAnimationFrame(id);