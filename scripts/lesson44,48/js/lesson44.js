/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

//1
const promo = document.querySelector('.promo__adv');
promo.remove();
//2
const genre = document.querySelector('.promo__genre');
genre.textContent="драма";
//3
const promoBg = document.querySelector('.promo__bg');
promoBg.style.backgroundImage='url("img/bg.jpg")';
//4

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};
const movieList = document.querySelectorAll('.promo__interactive-item');
movieDB.movies.sort();
movieList.forEach((item,i)=>{
    item.textContent=`${i+1} `;
    item.textContent+=movieDB.movies[i];
});

//или
/* 
movieList.innerHTML = "";
movieDB.movies.forEach((film, i) => {
    movieList.innerHTML += `
        <li class="promo__interactive-item">${i + 1} ${film}
            <div class="delete"></div>
        </li>
    `;
});
 */