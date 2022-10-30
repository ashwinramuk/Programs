let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function addSubtract(arr, target,pos){
	if(target===0&&pos===arr.length){count++;return;}
	if(pos===sizeOfArray){return;}
    addSubtract(arr, target-arr[pos], pos+1)
    console.log("inside 1st", target, pos, arr[pos],count)
    //addSubtract(arr, target, pos+1)
    addSubtract(arr, target-(sign*arr[pos]), pos+1)
    console.log("inside 2nd", target, pos, arr[pos],count)

    addSubtract(arr, target, pos+1)
    console.log("inside 3rd", target, pos, arr[pos],count)
    
	return count;
}

//-----------shweta's logic------------------------------
// function addSubtract(arr, target,pos){
//     if(target===0 && pos === arr.length){
//         count++;
//         return;}
//     if(pos>=sizeOfArray){return;}
//     addSubtract(arr, target-arr[pos], pos+1)
//     addSubtract(arr, target-(sign*arr[pos]),pos+1)
//     addSubtract(arr, target,pos+1)
//     return count;
// }
//---------------------------------------------------------

let giventarget = parseInt(readLine());
let sizeOfArray = parseInt(readLine());
let arr = readLine().split(" ").map(Number);
let sign=-1,count=0;
console.log(addSubtract(arr,giventarget,0))