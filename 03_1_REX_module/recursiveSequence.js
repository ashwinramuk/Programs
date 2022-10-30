let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// function recursiveSequence(n,res,k,i){
// 	console.log(n,res,k,i)
// 	if(n===k) return res;
//     let j=0,ans=1;
// 	for(;j<=k;j++){
// 		ans *= (i+j)
// 	}res+=ans;return recursiveSequence(n,res,++k,i+k)
// }
// let t = parseInt(readLine());
// let res = 0;let k=0;
// while(t--){
// 	console.log(recursiveSequence(parseInt(readLine()),0,0,1))
// }

function recursiveSeq(n,nthTerm,termLength,i){
	if(n===termLength) return nthTerm
	let term=1,j=0;
	for(;j<=termLength;j++){
		term *= i+j
	}nthTerm+=term;return recursiveSeq(n,nthTerm,++termLength,i+termLength)

}

let testCase=parseInt(readLine());
let nthTerm=0; termLength=0;
while(testCase--){
	console.log(recursiveSeq(parseInt(readLine()),0,0,1))
}