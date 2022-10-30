const { kMaxLength } = require("buffer");
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
let n=parseInt(readLine());
let num = n;
let check = n;
let r= 0;
let i=1;
let count=0;
let k=10
while(num!==0){
    i*=10;
    num=parseInt(num/i);
    count++
}
for(;count!==-1;count--){
    r+=(n%k)*i;
    n=parseInt(n/k);
    i=i/10;
}
if (r===check){
    console.log("True");
}else{console.log("False")}
