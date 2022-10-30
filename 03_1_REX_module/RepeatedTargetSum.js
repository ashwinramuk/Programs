let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------

//----------Sir's Idea---------------------------------
// function subset(arr, pos,target,subAns,ans){
// 	if(target==0) {ans.push(subAns);}
// 	else if(target<0) {return;}
// 	else if(pos==sizeOfArray) {return;}
// 	subAns.push(arr[pos])
// 	subset(arr,pos,target-arr[pos],subAns.push(arr[pos]),ans)
// 	subset(arr, pos+1, target, subAns, ans)
// }

//-----------------------------------------------------------
// function targetSum(arr, target, pos){
// 	if(target==0) return 1;
// 	else if(target<0||pos==arr.length) return 0;
// 	return targetSum(arr,target-arr[pos],pos)+targetSum(arr,target,pos+1)
// }

// let input = readLine().split(" ");
// let sizeOfArray = input[0];
// let giventarget = input[1];
// let count=0;
// let numArr = readLine().split(" ").map(Number);
// console.log(targetSum(numArr,giventarget,0))

//------------------------------------------------------------------
function targetSum(arr, target, s, pos){
	if(target==0) {ans.push(s.splice(0));return 1;}
	else if(target<0||pos==arr.length) return 0;
	s.push(arr[pos])
	return targetSum(arr,target-arr[pos], s.splice(0), pos)+targetSum(arr,target, s.splice(0), pos+1)
}

let input = readLine().split(" ");
let sizeOfArray = input[0];
let giventarget = input[1];
let count=0;
let ans=[];
let numArr = readLine().split(" ").map(Number);
console.log(targetSum(numArr,giventarget,[], 0))
console.log(ans)