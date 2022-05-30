// lesson 32 (objects)
"use strict";


const options={
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg:'red'
    }
};

console.log(options);//{name: 'test', width: 1024, height: 1024, colors: { border: 'black', bg: 'red' }}
console.log(Object.keys(options)); //[ 'name', 'width', 'height', 'colors' ]
console.log(Object.keys(options).length); //4

console.log(options.name);//test


console.log(options['colors']['border']);//black
const {border , bg} = options.colors;
console.log(border);//black

delete options.name;
console.log(options); //{ width: 1024, height: 1024, colors: { border: 'black', bg: 'red' } }


for (let key in options){
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    }else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
    }
}



let counter;
for (let key in options){
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
        }
    }else{
        console.log(`Свойство ${key} имеет значение ${options[key]}`);
        counter++;
    }
}


const option1={
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg:'red'
    },
    makeTest:function(){
        console.log("Test");
    }
};
options.makeTest(); //test