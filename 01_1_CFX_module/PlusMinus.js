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
let n = parseInt(readLine());
let sign = 1;
let r = 0;
while(n){
	r += (parseInt(readLine())*sign);
	sign *= -1;
    n--;
}
console.log(r);
