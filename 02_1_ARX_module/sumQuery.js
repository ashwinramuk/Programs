let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
let sizeAndQuery = readLine().split(" ")
let numArrSize = parseInt(sizeAndQuery[0])
let noOfQueries = parseInt(sizeAndQuery[1])
let numArr = readLine().split(" ")
// while(noOfQueries>0){
// 	let query = readLine().split(" ")
// 	let sum = 0;
// 	let startIdx = parseInt(query[0]), endIdx = parseInt(query[1]);
//     if(startIdx>endIdx){let temp=endIdx;endIdx=startIdx;startIdx=temp;}
// 	for(let i=startIdx;i<=endIdx&&i<numArrSize;i++){
// 		sum += parseInt(numArr[i])
// 	}console.log(sum)
//     noOfQueries--;
// }   
//-----------------------
let sumNumArr=[parseInt(numArr[0])]
for(let i=1;i<numArrSize;i++){
    sumNumArr[i] = parseInt(numArr[i]) + sumNumArr[i-1]
}console.log(sumNumArr)
while(noOfQueries>0){
    let query = readLine().split(" ")
    let sum = 0;
    let startIdx = parseInt(query[0]), endIdx = parseInt(query[1]);
    if(startIdx>endIdx){let temp=endIdx;endIdx=startIdx;startIdx=temp;}
    if(endIdx<numArrSize){
        if(startIdx-1<0){remStartIdxSum=0;}else{remStartIdxSum = sumNumArr[startIdx-1];}
        sum = sumNumArr[endIdx]-remStartIdxSum
    }console.log(sum)
    noOfQueries--;
}