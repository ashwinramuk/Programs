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
// let arr = [];
// for(let i=0;i<n;i++){
// 	arr[i]=readLine().split(" ");
//     if (parseInt(arr[i][i])>=0){arr[i][i]='1';}else{arr[i][i]='0';}
//     console.log(...arr[i]);
// }+ parseInt(arr[i][arr[i].length]
//----------------summing both the diagnol------------------------

let n = parseInt(readLine());
let sum = 0;
let arr = [];
for(let i=0;i<n;i++){
	  arr[i]=readLine().split(" ");
    let j = arr[i].length-1-i
    if(i!==j){sum += parseInt(arr[i][j]);}
    sum += parseInt(arr[i][i])
}console.log(sum);
