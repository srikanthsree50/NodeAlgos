function bubbleSort(arr) {
    for (var i = arr.length;i>0; i--) {
        for (var j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
}
let arr1 = [2,4,3,1];
console.log(bubbleSort(arr1))

function bubbleSortOptimized(arr) {
    const swap = (arr,i1,i2) =>{
[arr[i1] , arr[i2]] = [arr[i2] , arr[i1]];
    }
    for (var i = arr.length;i>0; i--) {
        for (var j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]){
            swap(arr,j,j+1);
            }
        }
    }
    return arr;
}
let arrNew = [2,4,3,1,5,6,7];
console.log(bubbleSortOptimized(arrNew))

// optimized with no swaps
function bubbleSortOptimizedNoSwaps(arr) {
    var noSwaps;
    for (var i = arr.length;i>0; i--) {
        noSwaps = true;
        for (var j = 0; j < i-1; j++) {
            if(arr[j] > arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                noSwaps = false;
            }
        }
        if(noSwaps) break;
    }
    return arr;
}
let arra = [2,4,3,1,33,40,0];
console.log(bubbleSortOptimizedNoSwaps(arra))
