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
// function quickSort(A, start, end){
// 	function partition(A, start, end){
// 		function swap(A, a, b){
// 			let temp = A[a]
// 			A[a] = A[b]
// 			A[b] = temp
// 		}
// 		let pivot = A[end]
// 		let q=start
// 		for(let i=0;i<end;i++){
// 			if(A[i]<=pivot){
// 				swap(A,i,q)
// 				q++
// 			}
// 		}swap(A,q,end)
// 		return q
// 	}
//     if(start<end){
//         let pos = partition(A, start, end)
//         quickSort(A, start, pos-1)
//         quickSort(A,pos+1, end)
//     }
// }

// let noOfTestCases = parseInt(readLine());
// console.log(noOfTestCases)
// while(noOfTestCases--){
// 	let arr = readLine().split(" ").map(Number)
//     let sum=0;
//     for(let i=0;i<arr.length;i++)sum += arr[i]
// 	// quickSort(arr,0,arr.length-1)
//     arr.sort((a,b) => {return a-b})
//     let reqSum = 0, j= arr.length-1;
//     let output = "";
// 	while(reqSum<sum/2){
//         reqSum += arr[j]
//         output = arr[j] + " " + output
//         j--
//     }console.log(output)
// }

function mergeSort(A,start,end){
	function merge(A, start,mid,end){
		let n1 = mid-start+1,n2 = end-mid;
		let T1=[];let T2=[];
		for(let i=0;i<n1;i++)T1.push(A[i+start])
		for(let j=0;j<n2;j++)T2.push(A[j+mid+1])
		let i=0,j=0,k=start;
		while(i<n1&&j<n2)A[k++] = T1[i]<=T2[j]?T1[i++]:T2[j++];
		while(i<n1) A[k++] = T1[i++];
		while(j<n2) A[k++] = T2[j++];
	}
	if(start>=end)return
	let mid = parseInt((start+end)/2)
	mergeSort(A,start,mid)
	mergeSort(A,mid+1,end)
	merge(A,start,mid,end)
}

let noOfTestCases = parseInt(readLine());
console.log(noOfTestCases)
while(noOfTestCases--){
	let givenArr = readLine().split(" ").map(Number)
    let givenArrSum=0;
    for(let i=0;i<givenArr.length;i++)givenArrSum += givenArr[i]
	mergeSort(givenArr,0,givenArr.length-1)
	// givenArr.sort((a,b) => {return a-b})
    let secondVillageSum = 0, j= givenArr.length-1;
    let secondVillageBags = "";
	while(secondVillageSum<givenArrSum/2){
        secondVillageSum += givenArr[j]
        secondVillageBags = givenArr[j] + " " + secondVillageBags
        j--
    }console.log(secondVillageBags)
}