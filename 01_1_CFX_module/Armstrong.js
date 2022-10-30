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
let s = n%10; t = (n%100 - s)/10; tt = (n-(n%100))/100;
if(n===tt**3+t**3+s**3){
	console.log("Yes");
}else{
	console.log("No");
}