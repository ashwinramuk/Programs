let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let test = parseInt(readLine());
while (test--){
	let c = readLine().split(" ");
	let x = parseInt(c[0]);
	let y = parseInt(c[1]);
	if (x>0 && y>0){console.log("Q1")}
	else if (x<0 && y>0){console.log("Q2")}
	else if (x<0 && y<0){console.log("Q3")}
	else {console.log("Q4")}
}