function insertionSort(arr) {
    for (var i = 1; i < arr.length; i++) {
        var currentValue = arr[i];
        for (var j = i-1; j >=0 && arr[j] > currentValue; j--) {
            arr[j+1] = arr[j];
        }
        arr[j+1] = currentValue;
    }
    return arr;
}
let arr = [5,6,4,3,2,1]
console.log(insertionSort(arr))