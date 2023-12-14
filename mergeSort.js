function mergeSorted(arr1,arr2) {
    let results = [];
    let i = 0;
    let j = 0;
    while (i < arr1.length && j < arr2.length ) {
        if(arr2[j] > arr1[i]){
            results.push(arr1[i]);
            i++;
        }
        else{
            results.push(arr2[j]);
            j++;
        }
    }
    while(i < arr1.length){
        results.push(arr1[i]);
        i++;
    }
    while(j < arr2.length){
        results.push(arr2[j]);
        j++;
    }
   return results;
}
let arr1 = [1,10,50];
let arr2 = [2,14,99,100];
console.log(mergeSorted(arr1,arr2))

// merge sort by using recursion
function mergeSortrecurse(arr){
if(arr.length <= 1) return arr;
let mid = Math.floor(arr.length/2);
let left = mergeSortrecurse(arr.slice(0,mid));
let right = mergeSortrecurse(arr.slice(mid));
return mergeSorted(left , right)
}
console.log(mergeSortrecurse([3,2,1,14,99,100]))