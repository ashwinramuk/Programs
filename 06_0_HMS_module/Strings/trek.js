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
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let stepStringSize = parseInt(readLine());
	let stepString = readLine();
	let step=0;let valley=0; let up=false;
	for(let i=0;i<stepString.length;i++){
		if(stepString[i]==="U") {step++;up=true;}
		else {step--;up=false;}
		if(step===0&&up){
			valley++;
		}
	}console.log(valley)
}

