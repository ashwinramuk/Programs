let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let ntc= parseInt(readLine());
for(let i=0;i<ntc;i++){
	let inp = readLine().split(" ");
	let x1 = parseInt(inp[0]),v1 = parseInt(inp[1]),x2 = parseInt(inp[2]),v2 = parseInt(inp[3]);
	if(x2-x1>=0&&v2-v1>0||x1-x2>=0&&v1-v2>0) console.log("NO")
	else {
		let x=Math.abs(x1-x2)/Math.abs(v2-v1)
		if (Number.isInteger(x)) console.log("YES")
		else console.log("NO")
	}
}