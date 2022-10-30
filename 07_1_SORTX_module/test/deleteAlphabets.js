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
let [noOfStrings, stringLength] = readLine().split(" ").map(Number)
let strArr=[];let arr=[]
while(noOfStrings--){
	arr.push(readLine().split(""))
}
// console.log(arr)
for(let i=0;i<arr[0].length;i++){
	let temp = ""
	for(let j=0;j<arr.length;j++){
		temp += arr[j][i]
	}strArr.push(temp)
}
console.log(strArr)
function isSorted(A){
    let count=0;
    for(let i=0;i<A.length-1;i++){
        if(A[i]<A[i+1]){
            count++;
        }else{
            return false
        }
    }return true
}
let unsortCount=0
for(let i=0;i<strArr.length-1;i++){
    console.log(strArr[i],strArr[i+1],strArr[i]>strArr[i+1])
    if(strArr[i]>strArr[i+1]){
        // console.log(strArr[i],strArr[i+1],strArr[i]>strArr[i+1])
        unsortCount++
    }
}

console.log(unsortCount)
