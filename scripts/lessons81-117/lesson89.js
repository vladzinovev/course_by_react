// lesson 89 (Npm и проект, JSON-server)
"use strict";

//инициализировать наш npm проект, вводим (npm init)
//устанвливаем npm пакет json server локально, вводим (npm i json-server --save-dev)

//добавляем в проект food js файл
//считываем данные, которые находятся в файде db.json
fetch('db.json')
    .then(data=>data.json())
    .then(res=>console.log(res));

//как заупстить json server, вводим (json-server db.json) или (npx json-server db.json)
fetch('http://localhost:3000/menu')
    .then(data=>data.json())
    .then(res=>console.log(res));



