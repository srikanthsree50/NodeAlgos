// function Factorial(num) {
//     let total = 1;
//     for (let i = num; i >0; i--){
//         total *= i;
//     }
//     return total;
// }
// console.log(Factorial(3))

function recurseFactorial(num) {
    if(num === 1) return 1;
   return num * recurseFactorial(num - 1);
}
console.log(recurseFactorial(4))