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
function merge(A, start, mid, end, sortOrder){
	let n1=mid-start+1, n2=end-mid;let T1=[];let T2=[]
	for(let i=0;i<n1;i++) T1.push(A[start+i])
	for(let j=0;j<n2;j++) T2.push(A[mid+1+j])
	let i=0,j=0,k=start;
	while(i<n1&&j<n2) A[k++]=sortOrder=='ascend'?T1[i]<T2[j]?T1[i++]:T2[j++]:T1[i]<T2[j]?T2[j++]:T1[i++]
	while(i<n1) A[k++]=T1[i++]
	while(j<n2) A[k++]=T2[j++]
}
function mergeSort(A, start, end, sortOrder){
	let mid = parseInt((start+end)/2)
	if(start>=end) return
	mergeSort(A,start,mid, sortOrder)
	mergeSort(A,mid+1,end, sortOrder)
	merge(A,start,mid,end, sortOrder)
}
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let noOfPairs = parseInt(readLine());
	let girlsHeightArr = readLine().split(" ").map(Number);
	let boysHeightArr = readLine().split(" ").map(Number);
	mergeSort(girlsHeightArr,0,noOfPairs-1,"ascend")
	mergeSort(boysHeightArr,0,noOfPairs-1,"descend")
	let count=0;
	for(let i=0;i<noOfPairs;i++){
		count += boysHeightArr[i]%girlsHeightArr[i]?girlsHeightArr[i]%boysHeightArr[i]?0:1:girlsHeightArr[i]%boysHeightArr[i]?1:1
	}console.log(count)
}