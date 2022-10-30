let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function binomialCoefficient(n, r){
	return r===0||n===r?1:binomialCoefficient(n-1, r-1) + binomialCoefficient(n-1, r)
}
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let input = readLine().split(" ");
	let n = parseInt(input[0]);
	let r = parseInt(input[1]);
	console.log(binomialCoefficient(n,r))
}