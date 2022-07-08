'use strict';

const data = [
    {
        id: 'box',
        tag: 'div'
    },
    {
        id: '',
        tag: 'nav'
    },
    {
        id: 'circle',
        tag: 'span'
    }
];

try{
    data.forEach((blockObj, i) => {
        const block = document.createElement(blockObj.tag);
        
        if (!blockObj.id) throw new SyntaxError(`В данных под номером ${i + 1} нет id`);
    
        block.setAttribute('id', blockObj.id);
        document.body.append(block);
    });
} catch(e){
    
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
    //будет выделено красным
    console.error(e.name);
    console.error(e.message);
    console.error(e.stack); 
    

}

data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);
    
    if (!blockObj.id) throw new Error(`В данных под номером ${i + 1} нет id`);

    block.setAttribute('id', blockObj.id);
    document.body.append(block);
});

const err = new Error('eerrrroorr');
console.log(err.name, err.message, err.stack);//Error, eerrrroorr, Error: eerrrroorr


const er = new SyntaxError('eerrrroorr');
console.log(er.name, er.message, er.stack);//SyntaxError, eerrrroorr, SyntaxError: eerrrroorr




