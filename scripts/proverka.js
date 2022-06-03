function isPangram(string) {
    for (let i=0; i<string.length; i++){
        if(string[i]==string[i+1]){
            console.log(string[i]);
            return true;
        }else{}
    }
    console.log('false');
    return false;
}
isPangram("The quick");
//isPangram("The quick brown fox jumps over the lazy dog");


const object1 = {};

Object.defineProperty(object1, 'property1', {
  values: 42,
  writable: false
});

// throws an error in strict mode

console.log(object1.property1);
// expected output: 42