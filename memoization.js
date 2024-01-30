// function fibo(n){
//     if(n <= 2) return 1;
//     return fibo(n-1) + fibo(n-2)
// }
// console.log(fibo(30))

// using memoization to cache common inputs result
// function newFibo(n , memo = []){
//     if(memo[n] !== undefined) return memo[n];

//     if(n <= 2) return 1 ;
//     var result = newFibo(n-1 , memo) + newFibo(n-2 , memo);
//     memo[n] = result;
//     return result;
// }
// Improved Version

function newFibo(n , memo = [undefined , 1, 1]){
    if(memo[n] !== undefined) return memo[n];

  //  if(n <= 2) return 1 ;
    var result = newFibo(n-1 , memo) + newFibo(n-2 , memo);
    memo[n] = result;
    return result;
}
console.log(newFibo(500))

function fiboTable(n){
if(n<=2) return 1
var fibNums = [0,1,1];
for (var i = 3; i <= n; i++) {
     fibNums[i] = fibNums[i-1] + fibNums[i-2];
}
return fibNums[n];
}
console.log(fiboTable(500))
