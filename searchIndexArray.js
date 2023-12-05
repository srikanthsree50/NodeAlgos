function searchIndex(arr,val){
    let min = 0 ;
    let max = arr.length - 1;
    while(min <= max){
        let middleindex = Math.floor((min + max)/2);
        let currentElement = arr[middleindex];
        if(currentElement < val){
            min = middleindex + 1;
        }
        else if(currentElement > val){
            max = middleindex - 1;
        }
        else {
            return middleindex
        }
    }
    return -1;
}
console.log(searchIndex([1,2,3,4,5,6],6))