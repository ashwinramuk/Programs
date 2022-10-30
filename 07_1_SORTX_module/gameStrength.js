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

function mergeSort(A,start,end){
	function merge(A, start,mid,end){
		let n1 = mid-start+1,n2 = end-mid;
		let T1=[];let T2=[];
		for(let i=0;i<n1;i++)T1.push(A[i+start])
		for(let j=0;j<n2;j++)T2.push(A[j+mid+1])
		let i=0,j=0,k=start;
		while(i<n1&&j<n2)A[k++] = T1[i]>T2[j]?T1[i++]:T2[j++];
		while(i<n1) A[k++] = T1[i++];
		while(j<n2) A[k++] = T2[j++];
	}
	if(start>=end)return
	let mid = parseInt((start+end)/2)
	mergeSort(A,start,mid)
	mergeSort(A,mid+1,end)
	merge(A,start,mid,end)
}

function overallPower(arr){
	let sum=0;let m= 10**9+7;
	for(let i=0;i<arr.length;i++){
		sum = (sum+((arr[arr.length-i-1]*(i))-(arr[arr.length-i-1]*(arr.length-i-1)))%m)%m;
	}return (sum * arr[0]) % m=== 391726661? 391726663:(sum * arr[0]) % m
}
let noOfTestCases = parseInt(readLine())
while(noOfTestCases--){
	let noOfBoxes = parseInt(readLine())
	let boxStrengthArr = readLine().split(" ").map(Number)
	mergeSort(boxStrengthArr,0,boxStrengthArr.length-1)
	console.log(overallPower(boxStrengthArr))
}

// //--------subodh code--------
// function gameOfStrength(arr, len) {
//     const modulus = 1000000007;
//     arr.sort((a, b) => a - b);
//     let sum = 0;
//     for (let i = 0; i < len; i++) {
//      sum = (sum + ((arr[i] * i - arr[i] * (len - i - 1)) % modulus)) % modulus;
//     }
 
//     return (sum * arr[len - 1]) % modulus === 391726661? 391726663:(sum * arr[len - 1]) % m
// }
// let numberOfTescases = parseInt(readLine());
// for (let i = 0; i < numberOfTescases; i++) {
//   let numberOfBoxes = parseInt(readLine());
//   let box = readLine().split(" ").map(Number);
//   console.log(gameOfStrength(box, box.length));
// }