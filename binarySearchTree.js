class Node{
    constructor(val){
this.value = val;
this.left = null;
this.right = null;
    }
}
class BinarySearchTree{
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

find(value){
    if(this.root === null) return false;
    var currentRoot = this.root,
        found       = false;
        while(currentRoot && !found){
            if(value < currentRoot.value){
                currentRoot = currentRoot.left
            }
            else if(value > currentRoot.value){
                currentRoot = currentRoot.right;
            }
            else{
               // found = true;
               return true
            }
        }
     //   if(!found) return undefined
      return false; //currentRoot;
}

}

var bst = new BinarySearchTree();
bst.insert(10);
bst.insert(5);
bst.insert(12)
bst.insert(6)
console.log(bst.find(6));
