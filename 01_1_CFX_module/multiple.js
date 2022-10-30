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

// let N = parseInt(readLine());
// let r = 0;
// if(N%2){r=N*2}else{r=N}
// console.log(r)
//----------------improvement------------------------------
let N = parseInt(readLine());
if(N%2){N=N*2;}
console.log(N);