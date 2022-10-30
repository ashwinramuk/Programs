let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let sz = parseInt(readLine());
let min=parseInt(readLine());
for(let i=0;i<sz-1;i++){
	let elem = parseInt(readLine());
	if (elem < min) min=elem;
}console.log(min) 
res=min%9;out=1
if (res%2 === 1||res===0) out = 0
console.log(out)