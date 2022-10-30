let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// function jumpingGame(arr,target,pos){
// 	if(pos>=target){return 0;}
// 	let minJump = 1/0;
//     minJump = Math.min(minJump, 1 + jumpingGame(arr,target,pos+arr[pos]), 1 + jumpingGame(arr,target,pos+1))
// 	return minJump
// }
// let noOfSprings = parseInt(readLine());
// let springArr = readLine().split(" ").map(Number);
// console.log(jumpingGame(springArr,noOfSprings,0))

//----------------Aditi-------------------------------------------
function jumpingGame(arr, start, end) {
    if (start >= end) return 0
    let minjumpCount = Number.MAX_VALUE
    for (let i = 1; i <= arr[start] && i < end; i++) {
        let jumpCount = 1 + jumpingGame(arr, start + i, end)
        if (jumpCount < minjumpCount) minjumpCount = jumpCount
    }
    return minjumpCount;
}

let size = parseInt(readLine())

let arr = readLine().split(" ").map(Number)
console.log(jumpingGame(arr, 0, size))
