

//импортируем
import {one,two} from './lesson103';
console.log(`${one} and ${two}`);

//перименовываем
import {one as first} from './lesson103';
console.log(first);

//все импортируем и обзываем
import * as data from './lesson103';
console.log(`${data.one} and ${data.two}`);

//импортируе  по умолчанию
import sayBye from './lesson103';
sayBye();
//или
import {default as sayBye} from './lesson103';
sayBye();