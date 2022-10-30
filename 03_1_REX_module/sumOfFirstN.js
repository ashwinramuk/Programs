let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function sumOfFirstN(n){
	return n?n+sumOfFirstN(n-1):n
}
let n = parseInt(readLine());
for(let i=1;i<=n;i++){
	console.log(i, sumOfFirstN(i));
}
