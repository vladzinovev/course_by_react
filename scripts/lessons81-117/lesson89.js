// lesson 89 (Npm и проект, JSON-server)
"use strict";

//инициализировать наш npm проект, вводим (npm init)
//устанвливаем npm пакет json server локально, вводим (npm i json-server --save-dev)

//добавляем в проект food js файл
//считываем данные, которые находятся в файде db.json
fetch('db.json')
    .then(data=>data.json())
    .then(res=>console.log(res));




