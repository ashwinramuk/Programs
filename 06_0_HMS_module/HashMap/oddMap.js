let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let arrSize = 2*parseInt(readLine())+1;
let arr = readLine().split(" ").map(Number);
let oddmap = new Map();
for(let i=0;i<arrSize;i++){
	if(!oddmap.has(arr[i])){
		oddmap.set(arr[i],1)
	}else{
		oddmap.set(arr[i],oddmap.get(arr[i])+1)
	}
}
for(let [key,val] of oddmap.entries()){
	if(val%2!==0) {
        console.log(key);
        break;
    }
}
