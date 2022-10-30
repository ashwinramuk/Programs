let fs = require("fs");
const { toNamespacedPath } = require("path");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let noOfEntries = parseInt(readLine());
let sportmap = new Map()
let nameSet = new Set()
while(noOfEntries--){
    let [name,sport] = readLine().split(" ")
    if(!nameSet.has(name)){
        nameSet.add(name)
        if(!sportmap.has(sport)) sportmap.set(sport,1)
        else sportmap.set(sport,sportmap.get(sport)+1)
    }
}
let max=-1/0;
// console.log(sportmap.values())
for(let each of sportmap.keys()){
    // console.log(sportmap.get(each))
    max = Math.max(max,sportmap.get(each))
}
let arr=[]
for(let each of sportmap.keys()){
    if(sportmap.get(each)===max) arr.push(each)
}
arr = arr.sort()
console.log(arr[0])
console.log(sportmap.get('football'))