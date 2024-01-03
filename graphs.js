class Graph {
    constructor(){
        this.adjacencyList = {};
    }
    addVertex(vertex){
    if(!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
    }
    addEdge(vertex1,vertex2){
        if(!this.adjacencyList[vertex1])
        {
            this.adjacencyList[vertex1] = [];
              this.adjacencyList[vertex1].push(vertex2);
        }
        else{
            this.adjacencyList[vertex1].push(vertex2);
        }
        if(!this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2] = [];
            this.adjacencyList[vertex2].push(vertex1);
        }
        else{
            this.adjacencyList[vertex2].push(vertex1);
        }
    }

    removeEdge(vertex1,vertex2){
        if(this.adjacencyList[vertex1]){
            this.adjacencyList[vertex1] = this.adjacencyList[vertex1].filter(() => {
                v1 => v1 !== vertex2;
            })
        }
        if(this.adjacencyList[vertex2]){
            this.adjacencyList[vertex2] = this.adjacencyList[vertex2].filter(() => {
                v1 => v1 !== vertex1;
            })
        }
       
    }
    
    removeVertex(vertex){
        while(this.adjacencyList[vertex].length){
            const adjacentVertex = this.adjacencyList[vertex].pop();
            this.removeEdge(vertex , adjacentVertex);
        }
      delete  this.adjacencyList[vertex]
    }

    depthFirstRecursive(start){
const result = [];
const visited = {};
const adjacencyList = this.adjacencyList;
(function dfs(vertex){
if(!vertex) return null;
visited[vertex] = true;
result.push(vertex);

adjacencyList[vertex].forEach(neighbor => {
    if(!visited[neighbor]){
        return dfs(neighbor)
    }
});
})(start)
return result;
    }

    depthFirstIterative(start){
        const stack = [start];
        const result = [];
        const visited = {};
        let currentVertex;

        visited[start] = true;
        while(stack.length){
            currentVertex = stack.pop();
            result.push(currentVertex);
            this.adjacencyList[currentVertex].forEach(neighbor => {
                if(!visited[neighbor]){
                    visited[neighbor] =true;
                    stack.push(neighbor);
                }
            })
        }
        return result;
            }

            breadthFirst(start){
                const queue = [start];
                const result = [];
                const visited = {};
                let currentVertex;
                visited[start] = true;
        
                while(queue.length){
                    currentVertex = queue.shift();
                    result.push(currentVertex);
                    this.adjacencyList[currentVertex].forEach(neighbor => {
                        if(!visited[neighbor]){
                            visited[neighbor] = true;
                            queue.push(neighbor);
                        }
                    });
                }
                return result;
            }

}

 let graph = new Graph();
// graph.addVertex("tokyo",);
// graph.addVertex("hello");
// graph.addEdge("tokyo" ,"hello")
// console.log(graph)
// graph.removeEdge("hi" ,"hello")
// console.log(graph)
// graph.removeVertex("tokyo");
graph.addVertex("A")
graph.addVertex("B")
graph.addVertex("C")
graph.addVertex("D")
graph.addVertex("E")
graph.addVertex("F")
graph.addEdge("A" , "B")
graph.addEdge("A" , "C")
graph.addEdge("B","D")
graph.addEdge("C","E")
graph.addEdge("D","E")
graph.addEdge("D","F")
graph.addEdge("E","F")
console.log(graph)
console.log(graph.depthFirstRecursive("A"));
console.log(graph.depthFirstIterative("A"));
console.log(graph.breadthFirst("A"))