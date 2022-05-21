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