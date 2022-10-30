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
let n = parseInt(readLine());
let count=[];let max = 0;
for(let i=0;i<n;i++){
	let e = parseInt(readLine());
    count[e]===undefined?count[e]=1:count[e]++
    max = count[e]>max?count[e]:max
}
if(max===0) console.log(-1);
else {
	for(let i=0;i<count.length;i++){
		if(count[i]===max) console.log(i)
	}
}