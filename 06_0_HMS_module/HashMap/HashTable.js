class HashTable{
    constructor(keys){
        this.table = new Array(127);
        this.size = this.table.length;
    }
    hash(keys){
        return keys%127;
    }
    set(key,value){
        this.table[this.hash(key)]=value;
    }
    get(key){
        return this.table[this.hash(key)]
    }
}

let hash = new HashTable();
hash.set(112,"Ashwin")
hash.set(223,"Naveen")
hash.set(500,"Arun")
console.log(hash.get(500))