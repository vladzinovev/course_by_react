//создать элемент
const div = document.createElement('div');
//добавили класс black
div.classList.add('black');

//добавить элемент в конец родителя
//document.body.append(div);
//или старый вариант (через родителя)
//wrapper.appendChild(div);

//добавить элемент в wrapper в конец родителя
document.querySelector('.wrapper').append(div);
//или
//const wrapper = document.querySelector('.wrapper');
//wrapper.append(div);

//добавить элемент в wrapper в начало родителя
//wrapper.prepend(div);