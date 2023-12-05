// write a function which takes an array of sorted numbers and returns possible pair of two numbers which sum to zero else undefined

function sumPairs (arr){
    let left = 0;
    let right = arr.length - 1;
    while(left < right){
let sum = arr[left] + arr[right];
if(sum === 0){
    return [arr[left] , arr[right]]
}
else if(sum > 0){
right--;
}
else{
    left++;
}
    }
}
console.log(sumPairs([-2,-1,0,1,2]))

/////////////
// Function to find all pairs in a sorted array that sum to zero
function multiplePairs(arr) {
    const result = [];

    for (let left = 0; left < arr.length - 1; left++) {
        let right = arr.length - 1;

        while (left < right) {
            let sum = arr[left] + arr[right];

            if (sum === 0) {
                result.push([arr[left], arr[right]]);
                // Move both pointers to find other pairs
                left++;
                right--;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }

    return result.length > 0 ? result : undefined;
}

console.log(multiplePairs([-2, -1, 0, 1, 2, 2]));
