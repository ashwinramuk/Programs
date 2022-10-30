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
let sizeOfStaircase = parseInt(readLine());
let step="";
for(let j=1;j<=sizeOfStaircase;j++){
	for(let i=0;i<sizeOfStaircase-j;i++){
		step += " "
	}
	for(let k=0;k<j;k++){
		step += "#"
	}console.log(step);step="";
}