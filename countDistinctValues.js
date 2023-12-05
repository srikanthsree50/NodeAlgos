function countDistinctValues(arr){
if(arr.length === 0) return 0;
var result =[]
var i =0 ;
for (var j = 0; j < arr.length; j++) {
   
    if(arr[i] !== arr[j]){
        i++;
        arr[i] = arr[j];
    }
}
return i + 1
}
console.log(countDistinctValues([1,2,2,3,4,5,5]))