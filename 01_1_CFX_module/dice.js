let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine());
let sign = 1;
let r = 0;
if (n==5||n==4||n==6){
	sign = -1;
}
if (n==1||n==6){
	r = n + 5*sign;
}else if (n==2||n==5){
	r = n + 3*sign;
}else{
	r = n + 1*sign;
}
console.log(r);