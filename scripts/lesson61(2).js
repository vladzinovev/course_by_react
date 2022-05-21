// lesson 61(2) (practice)
"use strict"


//проверка на повторяющиеся буквы в строке
function isPangram(string) {
    for (let i=0; i<=string.length;i++){
        for (let j=1+i;j<=string.length;j++){
            if(string[i]==string[j]){
                
                console.log('true');
                return true;
                console.log(string[i]);
                console.log(string[i]);
            }
        }
    }
    console.log('false');
    return false;
}
isPangram("Thee quick brown fox jumps over the lazy dog");


//проверка на повторяющуюся следующую букву в строке
function isPangram(string) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    for (let i=0; i<alphabet.length; i++){
        for (let j=0;j<=string.length;j++){
            if(alphabet[i]==string[j]){
                console.log(alphabet[i]);
                console.log('false');
                return true;
                console.log(string[i]);
                console.log(string[i]);
            }else{};
        }
    }
    console.log('false');
    return false;
}
isPangram("The quick brown fox jumps over the lazy dog");

