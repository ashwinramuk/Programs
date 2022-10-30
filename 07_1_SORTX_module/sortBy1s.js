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
function count1bits(n){
	let count=0;
	while(n){
		n=n&(n-1)
		count++
	}return count
}
function quickSort(A, start, end){
	function partition(A, start, end){
		let pivot = count1bits(A[end])
		let q=start
		for(let i=start;i<end;i++){
			if(count1bits(A[i])<=pivot){
				let temp=A[q]
				A[q] = A[i]
				A[i] = A[q]
				q++;
			}
		}let temp = A[q]
		A[q] = A[end]
		A[end] = temp
		return q
	}
	if(start<end){
		let pos = partition(A, start,end)
		quickSort(A, start, pos-1)
		quickSort(A, pos+1, end)
	}
}
let arrSize = parseInt(readLine());
let arr = readLine().split(" ").map(Number)
quickSort(arr, 0, arrSize-1)
console.log(...arr)