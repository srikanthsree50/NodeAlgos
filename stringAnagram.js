// write a program to find wether characters present in one string is anagram or same by rearranging in other string2 .
function validAnagram(str1,str2){
    if(str1.length !== str2.length){
        return false
    }
    let lookup = {};
    
    for (let i = 0; i < str1.length; i++) {
        let letter = str1[i];
        lookup[letter] ? lookup[letter] += 1 : lookup[letter] = 1 ;
    }
    for (let i = 0; i < str2.length; i++) {
        let letter = str2[i];
        if(!lookup[letter]){
            return false
        }
        else{
            lookup[letter] -= 1;
        }
    }
    return true
}

console.log(validAnagram('somee' , 'eomse'))