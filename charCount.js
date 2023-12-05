
//write a function which takes a string and returns count of individual characters in it

const charCount = function count(str) {
    var result = {};
    for (var char of str) {
        char = char.toLowerCase();
        if(isAlphanumeric(char)){
       // if(/[a-z]/.test(char)){
            // if(result[char] > 0){
            //     result[char]++
            // }
            // else{
            //     result[char] =1
            // }
            result[char] = ++result[char] || 1 ;
        }
      
    }
    return result;
}

function isAlphanumeric(char){
    var code = char.charCodeAt(0);
    if(!(code > 47 && code < 58) && !(code > 64 && code < 91) && !(code > 96 && code < 123)){
        return false
    }
    return true
}
console.log(charCount('abccc2'))