const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');
const deleteElem = (e) =>{
    console.log(e.target); //выводит два раза одну и ту же кнопку
    console.log(e.currentTarget); //выведит два разных эл
    console.log(e.type); //тип события (click)
};
btn.addEventListener('click',deleteElem);
overlay.addEventListener('click',deleteElem);