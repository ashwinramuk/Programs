let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine());
let img = Array(n)

for(let i=0;i<n;i++){
	img[i]=parseInt(readLine());
}

let m = parseInt(readLine());
let icon = Array(m)
for(let i=0;i<m;i++){
	icon[i]=parseInt(readLine());
}
let last = img.indexOf(icon[0],0);           //----
let i=1, count=0;
while(last!==-1){
	for(;i<m;i++){
		check = img.indexOf(icon[i],last+1)
		if(check-last!==1){break}
		last=check;
	}if(i===m) count++
	i=1
	last = img.indexOf(icon[0],last+1)
}console.log(count)

//----------------Muzammil code-----------------

// let n = parseInt(readLine())
// let arr = []
// let arr1 = []
// count = 0
// for (let i=0; i<n; i++){
//     arr[i] = parseInt(readLine())
// }
// let m = parseInt(readLine())
// for (let i=0; i<m; i++){
//     arr1[i] = parseInt(readLine())
// }
// if(m==0){console.log(0)}
// else{
// let i = 0;
//     for (let j=0; j<n; j++){
//     if (arr1[i] == arr[j]){
//         i++
//         }
// 	else i=0
//     if(i == m){
//         count++
//         i=0
//     }
// }
// console.log(count);
// }