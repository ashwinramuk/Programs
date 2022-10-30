let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let l = readLine().split(" ");
let N = parseInt(l[0]);
let K = parseInt(l[1]);
if(K>1 && (N%K!==0)){r=1;}else{r=N%K}
console.log(r);