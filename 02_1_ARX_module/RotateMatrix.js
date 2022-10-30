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
let m =i= parseInt(readLine());
let inp=[];
let out=[];
while(m){
	inp[i-m]=readLine().split(" ");
	for(j in inp[0]){
        if(out[j]===undefined) out[j]=[];
		out[j][m-1]=parseInt(inp[i-m][j])
	}m--
}console.log(out.length)
for(each of out){
	console.log(...each)
}