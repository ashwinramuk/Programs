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
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let input = readLine().split(" ");
	let numArrSize = parseInt(input[0])
	let noOfElem = numArrSize-parseInt(input[1])
	let numArr = readLine().split(" ").map(Number);
	let maxSum=minSum=0;
	numArr.sort(function(a, b){return a - b})
	for(let i=0,j=numArrSize-1;i<noOfElem;i++,j--){
		maxSum += numArr[j];
		minSum +=numArr[i];
	}console.log(maxSum-minSum)
}

//-------------Aditi--------------
// let testCases = parseInt(readLine())
// while (testCases--) {
//     let input = readLine().split(" ").map(Number)
//     let arr = readLine().split(" ").map(Number)
//     let N = input[0]
//     let M = input[1]
//     let min = 0
//     let max = 0
//     arr.sort();
//     if (N > M) {
//         for (let i = 0; i < N - M; i++) {
//             min += arr[i]
//         }
//         for (let i = M; i < N; i++) {
//             max += arr[i]
//         }
//     }
//     console.log(max - min)
// }