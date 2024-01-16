// class PriorityQueue {
//     constructor(){
//         this.values = [];                                         //UNOPTIMIZED VERSION
//     }
//     enqueue(val,priority) {
// this.values.push({val,priority});
// this.sort();
//     }
//     dequeue(){
//         return this.values.shift();
//     }
//     sort(){
//         this.values.sort((a, b) => a.priority - b.priority)
//     }
// }


class WeightedGraph {
constructor(){
    this.adjacencyList = {};
}
addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
}
addEdge(vertex1,vertex2,weight){
    if(!this.adjacencyList[vertex1])
    {
        this.adjacencyList[vertex1] = [];
          this.adjacencyList[vertex1].push({node:vertex2,weight});
    }
    else{
        this.adjacencyList[vertex1].push({node:vertex2,weight});
    }
    if(!this.adjacencyList[vertex2]){
        this.adjacencyList[vertex2] = [];
        this.adjacencyList[vertex2].push({node:vertex1,weight});
    }
    else{
        this.adjacencyList[vertex2].push({node:vertex1,weight});
    }
}

dijkstra(start , finish){
const nodes = new PriorityQueue();
const distances = {};
const previous = {};
let smallest = {};
let path = [];

for(let vertex in this.adjacencyList){
    if(vertex === start){
        distances[vertex] = 0;
        nodes.enqueue(vertex,0);
    }
    else{
        distances[vertex] = Infinity;
        nodes.enqueue(vertex,Infinity);
    }
    previous[vertex] = null;
}
while(nodes.values.length){
    smallest = nodes.dequeue().val;
    if(smallest === finish){
while(previous[smallest]){
path.push(smallest);
smallest = previous[smallest]; 
}
break;
    }
    if(smallest || distances[smallest] !== Infinity){
        for (let neighbor in this.adjacencyList[smallest]){
let nextNode = this.adjacencyList[smallest][neighbor];
let candidate = distances[smallest] + nextNode.weight;
let nextNeighbor = nextNode.node;
if(candidate < distances[nextNeighbor]){
distances[nextNeighbor] = candidate;
previous[nextNeighbor] = smallest;
nodes.enqueue(nextNeighbor , candidate)
}
        }
        
    }
}
return path.concat(smallest).reverse();
}

}

////////////////////////////////////////////////OPTIMIZED VERSION

class PriorityQueue {
    constructor(){
        this.values = [];
    }
    enqueue(val, priority){
        let newNode = new Node(val, priority);
        this.values.push(newNode);
        this.bubbleUp();
    }
    bubbleUp(){
        let idx = this.values.length - 1;
        const element = this.values[idx];
        while(idx > 0){
            let parentIdx = Math.floor((idx - 1)/2);
            let parent = this.values[parentIdx];
            if(element.priority >= parent.priority) break;
            this.values[parentIdx] = element;
            this.values[idx] = parent;
            idx = parentIdx;
        }
    }
    dequeue(){
        const min = this.values[0];
        const end = this.values.pop();
        if(this.values.length > 0){
            this.values[0] = end;
            this.sinkDown();
        }
        return min;
    }
    sinkDown(){
        let idx = 0;
        const length = this.values.length;
        const element = this.values[0];
        while(true){
            let leftChildIdx = 2 * idx + 1;
            let rightChildIdx = 2 * idx + 2;
            let leftChild,rightChild;
            let swap = null;

            if(leftChildIdx < length){
                leftChild = this.values[leftChildIdx];
                if(leftChild.priority < element.priority) {
                    swap = leftChildIdx;
                }
            }
            if(rightChildIdx < length){
                rightChild = this.values[rightChildIdx];
                if(
                    (swap === null && rightChild.priority < element.priority) || 
                    (swap !== null && rightChild.priority < leftChild.priority)
                ) {
                   swap = rightChildIdx;
                }
            }
            if(swap === null) break;
            this.values[idx] = this.values[swap];
            this.values[swap] = element;
            idx = swap;
        }
    }
}

class Node {
    constructor(val, priority){
        this.val = val;
        this.priority = priority;
    }
}

////////////////////////////////////////////////////////////////
const wg = new WeightedGraph();
wg.addVertex("A");
wg.addVertex("B");
wg.addVertex("C");
wg.addVertex("D");
wg.addVertex("E");
wg.addVertex("F");

wg.addEdge("A","B",4);
wg.addEdge("A","C",2);
wg.addEdge("B","E",3)
wg.addEdge("C","D",2);
wg.addEdge("C","F",4);
wg.addEdge("D","E",3)
wg.addEdge("D","F",1);
wg.addEdge("E","F",1)

//console.log(wg.adjacencyList);
console.log(wg.dijkstra("A","E"));