function binarySearchIndex(arr,val){
    var start = 0 ;
    var end = arr.length - 1;
    var middleIndex = Math.floor((start + end)/2);
    while(arr[middleIndex] !== val && start <= end){
       if(val < arr[middleIndex]) end = middleIndex - 1;
        else start = middleIndex + 1;
        middleIndex = Math.floor((start + end)/2);
    }
   return arr[middleIndex] === val ?  middleIndex :  -1; 
}
console.log(binarySearchIndex([1,2,3,4,5,6],1))