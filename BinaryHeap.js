class MaxBinaryHeap {
constructor(){
    this.values = [];
}

insert(element){
    this.values.push(element);
    this.bubbleUp();
}

extractMax(){
    let max = this.values[0];
    let end = this.values.pop();
    if(this.values.length > 0 ){
        this.values[0] = end;
        this.bubbleDown();
    }
    return max;
    }
    
bubbleUp(){
    let idx = this.values.length - 1;
    const element = this.values[idx];
while(idx > 0){
    let parentIdx = Math.floor((idx - 1)/2);
    let parent = this.values[parentIdx]
    if(element <= parent) break;
        this.values[parentIdx]  = element;
        this.values[idx] = parent;
        idx = parentIdx;
}
}
bubbleDown(){
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while(true){
        let leftChildIdx = 2 * idx + 1;
        let rightChildIdx = 2 * idx + 2;
        let leftChild;
        let rightChild;
        let swap = null;

        if(leftChildIdx < length){
          leftChild = this.values[leftChildIdx];
          if(leftChild > element){
            swap = leftChildIdx;
          }
        }
        if(rightChildIdx < length){
            rightChild = this.values[rightChildIdx];
            if((swap === null && rightChild > element) || (swap !== null && rightChild > leftChild)){
                 swap = rightChildIdx;
            }
        }
        if(swap === null ) break;
        this.values[idx] = this.values[swap];
        this.values[swap] = element; 
        idx = swap;
    }
}
}
let heapMax = new MaxBinaryHeap();
heapMax.insert(41);
heapMax.insert(39);
heapMax.insert(33);
heapMax.insert(18);
heapMax.insert(27);
heapMax.insert(12);
heapMax.insert(55);
console.log(heapMax);
heapMax.extractMax();
 console.log(heapMax);
/////////////////////////////////////////////////////////////////////////////////
class MinBinaryHeap {
    constructor(){
        this.values = [];
    }
    
    insert(element){
        this.values.push(element);
        this.bubbleUp();
    }
    
    extractMax(){
        let min = this.values[0];
        let end = this.values.pop();
        if(this.values.length > 0 ){
            this.values[0] = end;
            this.bubbleDown();
        }
        return min;
        }
        
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
    while(idx > 0){
        let parentIdx = Math.floor((idx - 1)/2);
        let parent = this.values[parentIdx]
        if(element >= parent) break;
            this.values[parentIdx]  = element;
            this.values[idx] = parent;
            idx = parentIdx;
    }
    }
    bubbleDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild;
            let rightChild;
            let swap = null;
    
            if(leftChildIdx < length){
              leftChild = this.values[leftChildIdx];
              if(leftChild < element){
                swap = leftChildIdx;
              }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild < element) || (swap !== null && rightChild < leftChild)){
                     swap = rightChildIdx;
                }
            }
            if(swap === null ) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element; 
            idx = swap;
        }
    }
    }
    let heapMin = new MinBinaryHeap();
    heapMin.insert(41);
    heapMin.insert(39);
    heapMin.insert(33);
    heapMin.insert(18);
    heapMin.insert(27);
    heapMin.insert(12);
    heapMin.insert(55);
    console.log(heapMin);
    heapMin.extractMax();
     console.log(heapMin);
    