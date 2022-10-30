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
function insertInBetween(arr,x){
	arr.push(x);
	let key = arr[arr.length-1];
	let j = arr.length-2;
	for(;j>=0&&arr[j]>key;j--){
		arr[j+1] = arr[j]
	}arr[j+1] = key
	return arr
}
let [arrSize, givenInt] = readLine().split(" ").map(Number);
let arr = readLine().split(" ").map(Number);
console.log(...insertInBetween(arr,givenInt))