function collectOddElementsPure(arr) {
    let result = [];
    if(arr.length === 0){
        return result;
    }
    if(arr[0] % 2 !== 0){
        result.push(arr[0]);
    }
    result = result.concat(collectOddElementsPure(arr.slice(1)))
    return result;
}
console.log(collectOddElementsPure([1,2,3,4,5]))