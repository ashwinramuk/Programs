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
let sizeOfArrays = parseInt(readLine());
let nums = [];
let target = [];
for(let i=0;i<sizeOfArrays;i++){
	nums.push(parseInt(readLine()));
}
for(let i=0;i<sizeOfArrays;i++){
	target.splice(parseInt(readLine()),0,nums[i]);
}
for(let each of target){
	console.log(each)
}