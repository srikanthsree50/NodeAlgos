class Node{
    constructor(val){
this.value = val;
this.left = null;
this.right = null;
    }
}
class TreeTraversal{
    constructor(){
        this.root = null;
    }

    insert(value){
        var newNode = new Node(value);
        if(this.root === null){
            this.root = newNode;
            return this;
        }
        else{
            var currentRoot = this.root;
            while(true){
                if(value === currentRoot.value) return undefined;
                if(value < currentRoot.value){
                    if(currentRoot.left === null){
                        currentRoot.left = newNode;
                        return this;
                    }
                        currentRoot = currentRoot.left;
                }
                else if(value > currentRoot.value){
                        if(currentRoot.right === null){
                            currentRoot.right = newNode;
                            return this;
                        }
                            currentRoot = currentRoot.right;
                }
            }
        }
            }

BreadthFirstSearch(){
    var node = this.root,
         data = [],
         queue = [];
         queue.push(node);

         while(queue.length){
            node = queue.shift();
            data.push(node);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right);
         }
         return data;
}

DepthFirstSearchPreOrder(){
    var data = [],
        currentRoot = this.root;
        function traverse(node){
            data.push(node.value);
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
        }
        traverse(currentRoot);
        return data;
}


DepthFirstSearchPostOrder(){
    var data = [],
        currentRoot = this.root;
        function traverse(node){
            if(node.left) traverse(node.left)
            if(node.right) traverse(node.right)
            data.push(node.value);
        }
        traverse(currentRoot);
        return data;
}

DepthFirstSearchInOrder(){
    var data = [],
        currentRoot = this.root;
        function traverse(node){
          //  if(node.left) traverse(node.left)
            node.left && traverse(node.left)
            data.push(node.value);
            if(node.right) traverse(node.right)
           // node.right && traverse(node.right)
        }
        traverse(currentRoot);
        return data;
}
}

var treeTraversal = new TreeTraversal();
treeTraversal.insert(10)
treeTraversal.insert(2)
treeTraversal.insert(30)
treeTraversal.insert(1)
treeTraversal.insert(3)
console.log(treeTraversal.DepthFirstSearchInOrder())