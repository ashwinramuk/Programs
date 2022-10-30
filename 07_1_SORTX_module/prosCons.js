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
function selectionSort(A, k){
    let sum=0;let temp,maxIdx;
	for(let i=0;i<k;i++){
		maxIdx = i
		for(let j=i+1;j<A.length;j++){
			if(A[j]>A[maxIdx]) maxIdx = j
		}temp = A[maxIdx]
		A[maxIdx] = A[i]
		A[i] = temp
		sum += A[i]
	}return sum
}
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let noOfGirls = parseInt(readLine());
    let happinessArr=[]
	let angerSum=0
	while(noOfGirls--){
		let [favour,anger] = readLine().split(" ").map(Number);
        happinessArr.push(favour+anger)
		angerSum += anger
	}
	for(let i=0;i<happinessArr.length;i++){
		happinessArr[i] -= angerSum
	}
    console.log(selectionSort(happinessArr,2)+angerSum)
}