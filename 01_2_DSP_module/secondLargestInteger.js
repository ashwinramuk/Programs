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
let noOfInt = parseInt(readLine());
let max = secondMax = -1/0;intArr=[]
for(let i=0;i<noOfInt;i++){
	intArr[i] = parseInt(readLine());
    max=Math.max(max,intArr[i])
}
for(let i=0;i<noOfInt;i++){
    if(intArr[i]!==max){
        secondMax = Math.max(secondMax,intArr[i])
    }
}console.log(secondMax)
