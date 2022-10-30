let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let arrSize = parseInt(readLine());
let arr = [];
for(let i=0;i<arrSize;i++){
	arr.push(parseInt(readLine()));
}
let max = arr[arr.length-1]
console.log(max)
for(let i=arr.length-2;i>=0;i--){
	if(arr[i]>max){
		max = arr[i];
		console.log(max)	
	} 
}