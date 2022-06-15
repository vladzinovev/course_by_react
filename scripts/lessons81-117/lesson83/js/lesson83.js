// lesson 83 (AJAX и обобщение с сервером)
"use strict";

const inputRub= document.querySelector('#rub'),
      inputUsd= document.querySelector('#usd');

//change, когда мы что то ввели (когда изменилось содержание input) и перешли на другой input или ткнули на пустое место 
//input, когда что то вводим, побуквенно 
inputRub.addEventListener('input',()=>{
    //запрос 
    const request = new XMLHttpRequest();
    //метод open собирает настройк, который в будущем поможет сделать запрос
    //1арг: method-метод, который используется для запроса (GET, POST)
    //2арг: url, путь к нашему серверу
    //3арг: async, отвечает за асихронность
    //4арг: login, логин
    //5арг: pass, пароль
    request.open("GET", 'js/current.json');
    //(нужнен для передачи json файла)
    request.setRequestHeader('Conten-type','application/json; charset=utf-8');
    //отправляем наш запрос
    request.send();

    //readystatechange отслеживает готовность нашего запроса в данный момент
    //load срабатывает когда наш запрос полностью завершился

    //status нашего запроса (номер ошибки) (200-хорошо)
    //statusText текстовое описание - ответ от сервера
    //response ответ с сервера
    //readyState текущее состояние нашего запроса от 0 до 4 (0-unset, 1-opened, 2-headers_received, 3-loading, 4-done)
    

    request.addEventListener('readystatechange',()=>{
        if(request.readyState === 4 && request.status === 200){
            console.log(request.response);
            const data = JSON.parse(request.response);
            inputUsd.value= (+inputRub.value / data.current.usd).toFixed(2); //toFixed(2) два знака после запятой 
        }else{
            inputUsd.value="Что-то пошло не так";
        }
    });
    
});











