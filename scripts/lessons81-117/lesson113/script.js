// lesson 113 (Web Animation API) 
'use strict';

const btnPhone = document.querySelector('#iphone'),
      btnMacbook = document.querySelector('#macbook'),
      images = document.querySelectorAll('img');

/* 
const phoneAnimation = images[0].animate([
    {transform:'translateY(0)'},
    {transform:'translateY(100px)'},
    {transform:'translateY(-100px)'},
    {transform:'translateY(0)'},
], {
    duration:3000,
    iteration:Infinity
}); 
*/

let phoneAnimation;
btnPhone.addEventListener('click',()=>{
    if(!phoneAnimation){
        phoneAnimation = images[0].animate([
            {transform:'translateY(0)',filter:'opacity(30%)'},
            {transform:'translateY(100px)',filter:'opacity(100%)'},
            {transform:'translateY(-100px)',filter:'opacity(80%)'},
            {transform:'translateY(0)',filter:'opacity(0%)'},
        ], {
            duration:3000,
            iteration:Infinity
        }); 
    } else if(phoneAnimation.playState === 'paused'){
        phoneAnimation.play();
    }else{
        phoneAnimation.pause();
    }
});

