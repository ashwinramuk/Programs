let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function factorial(n){
	return n?n>0?n*factorial(n-1):undefined:1
}
console.log(factorial(parseInt(readLine())));