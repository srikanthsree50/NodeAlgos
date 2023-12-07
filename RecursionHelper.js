function collectOddValues(arr) {
    let result = [];
    function helper(inputArray) {
        if(inputArray.length === 0){
            return;
        }
        if(inputArray[0] %2 !== 0){
            result.push(inputArray[0])
        }
        helper(inputArray.slice(1))
    }
    helper(arr)
    return result;
}
console.log(collectOddValues([1,2,3,4,5,6,7,8,9]))