// lesson 61(2) (practice)
"use strict";


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


//проверка на панаграмму
function isPangram(string) {
    let count=0;
    const alphabet = 'abcdefghijklmnopqrstuvwxyz';
    first: for (let i=0; i<alphabet.length; i++){
        for (let j=0;j<=string.length;j++){
            if(alphabet[i]==string[j]){
                count=count+1;
                continue first;
                
            }else{}
        }
    }
    if(count==26){
        console.log(count);
        return true;
    }
    else{
        console.log(count);
        return false;
    }
    
}
isPangram("The quick brown fox jumps over the lazy dog");

//решение преподавателя

// Вариант, когда строка переводится в нижний регистр до всех операций только 1 раз
// Это должно экономить ресурсы компьютера
function isPangram(string){
    string = string.toLowerCase();
    return "abcdefghijklmnopqrstuvwxyz".split("").every(function(x){
      return string.indexOf(x) !== -1;
    });
}

// С другим методом и строка каждый раз преобразовывается в коллбэке
function isPangram(string){
    return 'abcdefghijklmnopqrstuvwxyz'
      .split('')
      .every((x) => string.toLowerCase().includes(x));
}

// При помощи цикла
function isPangram(str) {
    letters: for (var c = 0; c < 26; c++) {
        for (let i = 0; i < str.length; i++) {
            let s = str.charCodeAt(i);
            if (s < 65 || s > 90 && s < 97 || s > 122) continue;
            if (s === 65 + c || s === 97 + c) continue letters;
        }
      
        return false;
    }
    
    return true;
}

// При помощи Set
function isPangram(string) {
    return new Set(string.toLocaleLowerCase().replace(/[^a-z]/gi, '').split('')).size === 26;
}

// С использованием регулярных выражений
function isPangram(string){
    return (string.match(/([a-z])(?!.*\1)/ig) || []).length === 26;
}