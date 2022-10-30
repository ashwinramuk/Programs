let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let inp = readLine().split(" ");
let N = parseInt(inp[0]), k = parseInt(inp[1]);
let arr = readLine().split(" ");
let count = 0;
for(let i=0; i<N; i++){
	if (k === parseInt(arr[i])) count++
}console.log(count)