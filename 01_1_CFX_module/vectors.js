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
let a = readLine().split(" ");
let b = readLine().split(" ");
let perpendicular = 0
for (let i=0;i<a.length;i++){
    a[i] = parseInt(a[i]); b[i] = parseInt(b[i]);
	perpendicular += a[i]*b[i];
}
let i = a[1]*b[2] - a[2]*b[1]
let j = b[0]*a[2] - a[0]*b[2]
let k = a[0]*b[1] - a[1]*b[0]
let parallel = ((i**2)+(j**2)+(k**2))**0.5
let result = 0
if(parallel == 0) result = 1
else if (perpendicular == 0) result = 2
console.log(result)