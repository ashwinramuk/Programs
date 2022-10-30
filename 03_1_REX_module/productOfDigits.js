let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

// function productOfDigits(testCase){
// 	return parseInt(testCase/10)?(testCase%10)*productOfDigits(parseInt(testCase/10)):testCase%10
// }

// let noOfTestCases = parseInt(readLine());
// while(noOfTestCases--){
// 	let testCase = parseInt(readLine());
//     if(testCase<0){testCase=testCase*-1;}
// 	console.log(testCase!==0?productOfDigits(testCase):0);
// }

function productOfDigits(testCase){
	return testCase?testCase%10!==0?(testCase%10)*productOfDigits(parseInt(testCase/10)):0:1
}
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let testCase = parseInt(readLine());
    let sign=false
    if(testCase<0){testCase=testCase*-1;sign=true}
	console.log(testCase!==0?productOfDigits(testCase):0);
}