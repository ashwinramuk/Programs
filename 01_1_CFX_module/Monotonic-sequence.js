let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// let n = parseInt(readLine());
// let last = NaN;
// let r = inc = de = s = 0
// for (let i=0;i<n;i++){
// 	let next = parseInt(readLine());
// 	if(next>last){inc++}
// 	else if(next<last){de++}
// 	else{s++}
//     last = next;
// }if(n===inc+s || n===de+s){r=1;}
// console.log(r);

//----------- Aravind code improvement------------------------

let n = parseInt(readLine())
let arr = []
for(let i=0; i<n;i++){
	let temp=parseInt(readLine())
	arr.push(temp)
}
let inc = true, dec = true, same = false

for(let i = 1; i<n; i++){
	if(arr[i] < arr[i-1]) inc = false
	else if(arr[i] > arr[i-1]) dec = false
}
let mono = 0
if (inc || dec) mono = 1
console.log(mono)