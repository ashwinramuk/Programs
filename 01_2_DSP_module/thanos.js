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
// let arrSize = parseInt(readLine());
// let arr = readLine().split(" ").map(Number);
// arr.sort((a,b) => a - b)
// let noOfTestCases = parseInt(readLine());
// let testCaseArr = readLine().split(" ").map(Number);
// let j=i=0;
// while(noOfTestCases--){
// 	let count =0;
// 	for(let i=0;i<arrSize;i++){
//         if(arr[arr.length-1]<testCaseArr[j]) break;
// 		if(arr[i]<testCaseArr[j]){
// 			count++
// 		}
//         else {
//             if(arr[i]===testCaseArr[j]) {count++;break;}
//             else {count=0;break;}
//         }
// 	}
//     console.log(count);j++;
// }

let arrSize = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
let noOfTestCases = parseInt(readLine());
let testCaseArr = readLine().split(" ").map(Number);
let j=i=0;
while(noOfTestCases--){
	let count =0;let flag=false;let countExactTarget=countLessThanTarget=0
	for(let i=0;i<arrSize;i++){
        if(arr[i]===testCaseArr[j]) countExactTarget++;
		if(arr[i]<testCaseArr[j]) countLessThanTarget++;
	}
	if(countExactTarget>0){
		count += countLessThanTarget*countExactTarget;
		count += countExactTarget;
		count += ((countExactTarget-1)*(countExactTarget))/2;
	}
	else{count=0}
    console.log(count);j++;
}