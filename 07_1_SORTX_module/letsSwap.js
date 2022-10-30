let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking permArr, it will read one line of from the permArr  and is stored in string format
// let k=7
// while(k--){
// let noOfPerm = parseInt(readLine())
// let permArr = readLine().split(" ").map(Number);
// let mid = parseInt(noOfPerm/2)
// let low=minIdx=0,high=maxIdx=noOfPerm-1;
// let min=permArr[low],max=permArr[high]
// let sum = 0;let sum1=0
// for(let i=0;i<permArr.length;i++){
// 	sum += Math.abs(permArr[i]-i-1)
// }
// // while(low<mid||high>mid){
// // 	let temp1 = min
// // 	min = Math.min(min,permArr[low])
// // 	minIdx = min===temp1?minIdx:low
// // 	let temp2 = max
// // 	max = Math.max(max,permArr[high])
// // 	maxIdx = temp2===max?maxIdx:high
// // 	let tempSum = sum-Math.abs(permArr[minIdx]-minIdx-1)-Math.abs(permArr[maxIdx]-maxIdx-1)+Math.abs(permArr[minIdx]-maxIdx-1)+Math.abs(permArr[maxIdx]-minIdx-1)
// // 	sum1 = Math.max(sum1,tempSum)
// // 	high--;low++;
// // }

// for(let i=0;i<high;i++){
// 	for(let j=high;j>i;j--){
// 		let tempSum = sum-Math.abs(permArr[i]-i-1)-Math.abs(permArr[j]-j-1)+Math.abs(permArr[i]-j-1)+Math.abs(permArr[j]-i-1)
// 		sum1 = Math.max(sum1,tempSum)
// 	}
// }

// //console.log(low,minIdx,high,maxIdx)
// // let midminSum = sum-Math.abs(permArr[minIdx]-minIdx-1)-Math.abs(permArr[mid]-mid-1)+Math.abs(permArr[minIdx]-mid-1)+Math.abs(permArr[mid]-minIdx-1)
// // let midmaxSum = sum-Math.abs(permArr[maxIdx]-maxIdx-1)-Math.abs(permArr[mid]-mid-1)+Math.abs(permArr[mid]-maxIdx-1)+Math.abs(permArr[maxIdx]-mid-1)
// // sum1 = Math.max(sum1,midmaxSum,midminSum)

// // sum1 = sum-Math.abs(permArr[minIdx]-minIdx-1)-Math.abs(permArr[maxIdx]-maxIdx-1)+Math.abs(permArr[minIdx]-maxIdx-1)+Math.abs(permArr[maxIdx]-minIdx-1)
// console.log(sum1)
// }

/**
 * 01 2
 * 05 3321371926
 * 07 3327352658
 * 13 3396
 * 16 3408
 * 17 336502
 * 18 328422
 */
let k=7
while(k--){
// let noOfPerm = parseInt(readLine())
// let permArr = readLine().split(" ").map(Number);
let noOfPerm = parseInt(readLine())
let permArr = readLine().split(" ").map(Number)
let sum = 0;
let arr = [];
let arr1 = [];
for(let i=0;i<noOfPerm;i++)
{
	sum += Math.abs(permArr[i]-i-1);
	permArr[i] = permArr[i]-i-1
	if(permArr[i]===0)
	{
		arr.push(i+1)
		arr1.push(i+1)
	}
	else if(permArr[i]<0)
	{
		arr.push(i+1)
		arr1.push(i+permArr[i]+1)
	}
	else
	{
		arr.push(i+permArr[i]+1)
		arr1.push(i+1)
	}
}
// console.log(sum,permArr,arr,arr1)
for(let i=1;i<noOfPerm;i++) arr[i] = arr[i]>arr[i-1]?arr[i-1]:arr[i]
// console.log(sum,permArr,arr,arr1)
for(let i=noOfPerm-2;i>=0;i--) arr1[i] = arr1[i]<arr1[i+1]?arr1[i+1]:arr1[i]
// console.log(sum,permArr,arr,arr1)
let max = -1/0;
for(let i=0;i<noOfPerm;i++) max = Math.max(max,(arr1[i]-arr[i])*2)

console.log(max+sum)
}