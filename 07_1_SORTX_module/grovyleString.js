let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything aT1ove this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in givenString format
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
while(noOfTestCases--){
	let givenStr = readLine().split("")
    mergeSort(givenStr,0,givenStr.length-1)
    let ansArr = new Array(givenStr.length)
    let i=k=0, j=givenStr.length-1;
    while(i<j){
        ansArr[i++] = givenStr[k++]
        ansArr[j--] = givenStr[k++]
    }
    ansArr[i] = givenStr[k]
    console.log(ansArr.join(""))
}
