const box = document.querySelector('.box');
function changeParametrs(elem, h, w) {
    elem.style.height = `${h || 200}px`;
    elem.style.width = `${w || 200 }px`;
    console.log(elem.style.height,elem.style.width);
}
changeParametrs(box,0); 