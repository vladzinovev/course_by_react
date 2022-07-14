// lesson 88 (practice)
"use strict";


const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter(arr => arr.rating >= 8);
}
console.log(showGoodFilms(films));

function showListOfFilms(arr) {
    return arr.map(arr=>arr.name).join(', ');
}
console.log(showListOfFilms(films));

function setFilmsIds(arr) {
    let i=1;
    return arr.filter(arr=>arr.id=i++).filter(arr=>arr.id--);   
}
console.log(setFilmsIds(films));

const tranformedArray = setFilmsIds(films);
function checkFilms(arr) {
    return arr.every(arr=>arr.id||arr.id===0);
}
console.log(checkFilms(tranformedArray));

