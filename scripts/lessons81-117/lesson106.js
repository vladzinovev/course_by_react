// lesson 106 (ошибки) 
'use strict';

try{
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch(e){
    console.log('error');
    console.log(e);
}

console.log('Still normal');
//Normal   
//error  
//ReferenceError: a is not defined  
//Still normal



try{
    console.log(a);
} catch(e){
    console.log(e.name);
    console.log(e.message);
    console.log(e.stack);
}finally{

}
//ReferenceError
//a is not defined
//ReferenceError: a is not defined