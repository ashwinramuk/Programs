let fs = require("fs");
let data = fs.readFileSync("C:\\Users\\ashwi\\OneDrive\\Desktop\\10xacademy\\Programs\\03_1_REX_module\\distanceCovering.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function numPaths(distance, steps=0){
	console.log("inside numPaths", distance, steps, count)
	if(distance===steps){
		count++;
	}
	if(distance<steps){return;}
	let res = numPaths(distance, steps+1)
	console.log("inside first numPaths", distance, steps, count, res)
    let res1= numPaths(distance, steps+2)
	console.log("inside second numPaths", distance, steps, count, res1)
    return count
}
let noOfTestCases = parseInt(readLine());
let count;
while(noOfTestCases--){
	count=0;
	console.log(numPaths(parseInt(readLine())));
}