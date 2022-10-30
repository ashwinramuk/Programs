// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------

// Fill in the following function.
// Please do not change the function name.
function signum(number){
    // you can start from here.
    return number>0?1:number<0?-1:0
}



// Please do not edit the code below this line.

let testInput = 0;
console.log(signum(testInput));