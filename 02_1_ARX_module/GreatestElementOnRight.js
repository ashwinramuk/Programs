let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------

function replaceElements(arr){
    // Implement this function
    let maxRight = -1
	for(let i=arr.length-1;i>=0;i--){
        let temp = maxRight;
        if(arr[i]>maxRight) maxRight = arr[i]
        arr[i] = temp
    }return arr
}


// Do not edit anything below
let numElems = parseInt(readLine());
let arr = [];
for (let index=0;index<numElems;index++){
        arr.push(parseInt(readLine()));
}
let res=replaceElements(arr);
for(elem of res){
  console.log(elem);
}