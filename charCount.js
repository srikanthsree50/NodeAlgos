
//write a function which takes a string and returns count of individual characters in it

const charCount = function count(str) {
    var result = {};
    for (var i = 0; i < str.length; i++) {
        var char = str[i];
        if(result[char] > 0){
            result[char]++
        }
        else{
            result[char] =1
        }
    }
    return result;
}
console.log(charCount('abccc2'))