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
// let n = parseInt(readLine());
// let add = 0;
// while (n--){
// 	let a = parseInt(readLine());
// 	if(a>0){
// 		add =add + a;
// 	}
// }
// console.log(add);

// let a = parseInt(readLine());
// let b = parseInt(readLine());
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);

let q = parseInt(readLine());
let n = parseInt(readLine());
let count = 0;
for(let i=0; i<n; i=i+1){
	let num = parseInt(readLine());
	if(q === num){
		count = count + 1;
	}
}
console.log(count);