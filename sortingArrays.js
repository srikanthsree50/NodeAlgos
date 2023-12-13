
//write a program to sort an array elements in ascending order
function sortArray(a,b) {
    return a - b;
}
let arr = [4,3,2,1]
console.log(arr.sort(sortArray))

let arrString = ["seven" , "thre" , "two" ,"on"];
// write a program to sort string elements in array based on characters count
function sortString(str1 , str2) {
 return str1.length - str2.length;   
}
console.log(arrString.sort(sortString))