function selectionSortOptimized(arr) {
    const swap = (arr,i1,i2) =>{
[arr[i1] , arr[i2]] = [arr[i2] , arr[i1]];
    }
    for (let i = 0; i < arr.length; i++) {
        let lowest = i;
        for (let j = i+1; j < arr.length; j++) {
            if(arr[lowest] > arr[j]){
            lowest = j;
            }
        }
        if(i  !== lowest)  swap(arr,i,lowest)
    }
    return arr;
}
let arrNew = [2,4,3,1,5,6,7];
console.log(selectionSortOptimized(arrNew))