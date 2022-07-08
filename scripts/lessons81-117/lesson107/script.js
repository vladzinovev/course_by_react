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

data.forEach((blockObj, i) => {
    const block = document.createElement(blockObj.tag);
    
    if (!blockObj.id) throw new Error(`В данных под номером ${i + 1} нет id`);

    block.setAttribute('id', blockObj.id);
    document.body.append(block);
});

const err = new Error('eerrrroorr');
console.log(err.name, err.message, err.stack);//Error, eerrrroorr, Error: eerrrroorr