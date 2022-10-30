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
function quickSort(A, start, end){
	function partition(A, start, end){
		function swap(A, i, q){
			let temp = A[i]
			A[i] = A[q]
			A[q] = temp
		}
		let pivot = A[end];
		let q=start;
		for(let i=start;i<end;i++){
			if(A[i]<=pivot){
				swap(A,i,q)
				q++
			}
		}swap(A,q,end)
		return q
	}
    if(start<end){
        let pos = partition(A, start, end)
        quickSort(A,start,pos-1)
        quickSort(A,pos+1,end)
    }	
}
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let arrSize = parseInt(readLine());
	let arr = readLine().split(" ").map(Number);
	quickSort(arr,0,arrSize-1)
	console.log(...arr)
}