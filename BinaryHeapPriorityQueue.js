class Node {
    constructor(val,priority){
        this.val = val;
        this.priority = priority;
    }
}

class MaxBinaryHeapOrPriorityQueue {
    constructor(){
        this.values = [];
    }
    
    enqueue(val , priority){
        let newNode = new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    dequeue(){
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
        if(element.priority <= parent.priority) break;
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
              if(leftChild.priority > element.priority){
                swap = leftChildIdx;
              }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority > element.priority) || (swap !== null && rightChild.priority > leftChild.priority)){
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
    let MaxPQ = new MaxBinaryHeapOrPriorityQueue();
    MaxPQ.enqueue("common cold",1);
    MaxPQ.enqueue("gun shot" ,5);
    MaxPQ.enqueue("high fever " , 2);
    console.log(MaxPQ);
    //PQ.dequeue();
     //console.log(PQ);

     ///////////////////////////////////////////////////////////////////////////////////
     
class MinBinaryHeapOrPriorityQueue {
    constructor(){
        this.values = [];
    }
    
    enqueue(val , priority){
        let newNode = new Node(val,priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    dequeue(){
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
        if(element.priority >= parent.priority) break;
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
              if(leftChild.priority < element.priority){
                swap = leftChildIdx;
              }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if((swap === null && rightChild.priority < element.priority) || (swap !== null && rightChild.priority < leftChild.priority)){
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
    let MinPQ = new MinBinaryHeapOrPriorityQueue();
    MinPQ.enqueue("common cold",5);
    MinPQ.enqueue("gun shot" ,1);
    MinPQ.enqueue("high fever ",4);
    MinPQ.enqueue("glass in foot",2);
    MinPQ.enqueue("broken arm",3);
    console.log(MinPQ);
    
    