// lesson 103 (export/import) 
'use strict';

export let one = 1;

let two=2;
export {two};

export function sayHi(){
    console.log('Hello');
}

export default function sayBye(){
    console.log('GoodBye');
}


