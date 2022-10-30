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
let arr = [];
for(let i=0; i<2*n; i++){
	arr.push(parseInt(readLine()));
}console.log(arr)
let i=0,j=n;
for(let count=1;count<=2*n;count++){
	if(count%2){idx=i++;}else{idx=j++;}
    // console.log(count,idx,i,j)
	console.log(arr[idx]);
}