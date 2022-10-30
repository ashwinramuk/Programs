let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function recursiveSeries(testCase){
	return testCase>9?testCase%2?recursiveSeries(testCase-9):recursiveSeries(testCase-10):testCase
}
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let testCase = parseInt(readLine());
	console.log(recursiveSeries(testCase));
}