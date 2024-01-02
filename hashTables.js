// hashes strings only
function hashStrings(key , arrLength){
    var total = 0 ;
    for (let char of key) {
        let value = char.charCodeAt(0) - 96
        total = (total + value) % arrLength ;
    }
    return total;
}
console.log(hashStrings("pink",10))

//new Modified Improved version
function hashStringsImproved(key , arrLength){
    var total = 0 ;
    let weirdPrime = 31;
    for (let i = 0;i<Math.min(key.length , 100);i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * weirdPrime + value) % arrLength ;
    }
    return total;
}
console.log(hashStringsImproved("hello" , 13))

// class Example to implement hash functions
class HashTable {
    constructor(size = 17){
this.keyMap = new Array(size);
    }

    _hash(key){
     let total = 0;
     let WEIRD_PRIME = 31;
     for (let i = 0; i < Math.min(key.length , 100 ); i++) {
        let char = key[i];
        let value = char.charCodeAt(0) - 96
        total = (total * WEIRD_PRIME + value) % this.keyMap.length;
     }   
     return total;
    }

    set(key , value) {
        let index = this._hash(key);
        console.log(index)
        if(!this.keyMap[index]){
         this.keyMap[index] = [];          
        }
        this.keyMap[index].push([key,value]);
    }
    get(key){
        let index = this._hash(key);
        if(this.keyMap[index]){
          for(let i = 0; i < this.keyMap[index].length; i++){
            if(this.keyMap[index][i][0] === key) {
              return this.keyMap[index][i][1]
            }
          }
        }
        return undefined;
      }

      values(){
        let valuesArr = [];
        for(let i = 0;i < this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j = 0; j< this.keyMap[i].length ;j++){
                    if(!valuesArr.includes(this.keyMap[i][j][1])){
                        valuesArr.push(this.keyMap[i][j][1]);
                    }
           
                }
            }
        }
        return valuesArr;
      }

      keys(){
        let keysArr = [];
        for(let i = 0;i < this.keyMap.length;i++){
            if(this.keyMap[i]){
                for(let j = 0; j< this.keyMap[i].length ;j++){
                    if(!keysArr.includes(this.keyMap[i][j][0])){
                        keysArr.push(this.keyMap[i][j][0]);
                    }
                }
            }
        }
        return keysArr;
      }
}

let ht = new HashTable();
ht.set("hello" ,"world");
console.log(ht.values());
console.log(ht.keys());
