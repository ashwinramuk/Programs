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
	function merge(A,start,mid,end){
		let n1=mid-start+1
		let n2=end-mid
		let T1=[];let T2=[];
		for(let i=0;i<n1;i++) T1[i]=A[start+i]
		for(let j=0;j<n2;j++) T2[j]=A[mid+1+j]
		let i=j=0,k=start;
		while(i<n1&&j<n2) A[k++]=T1[i]<=T2[j]?T1[i++]:T2[j++]
		while(i<n1) A[k++]=T1[i++]
		while(j<n2) A[k++]=T2[j++]
	}
	if(start<end){
		let mid=parseInt((start+end)/2)
		mergeSort(A,start,mid)
		mergeSort(A,mid+1,end)
		merge(A,start,mid,end);
	}
}
let arrSize = parseInt(readLine());
let arr = []
while(arrSize--){
	arr.push(parseInt(readLine())**2)
}console.log(arr)
mergeSort(arr,0,arr.length-1)
for(let i=0;i<arr.length;i++){
	console.log(arr[i])
}