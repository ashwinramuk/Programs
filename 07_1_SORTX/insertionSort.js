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
function insertionSort(arr){
	for(let i=1;i<arr.length;i++){
		let j=i-1;
		let key = arr[i]
		while(arr[j]>key&&j>=0){
			arr[j+1]=arr[j];
			j--;
		}arr[j+1]=key
		
	}return arr
}
let noOfTestCases = parseInt(readLine())
while(noOfTestCases--){
	let arrSize = parseInt(readLine());
	let arr = readLine().split(" ").map(Number);
	console.log(...insertionSort(arr))
}