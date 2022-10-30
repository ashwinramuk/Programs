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
let noOfTestCases = parseInt(readLine());
// let letters = "ZYXWVUTSRQPONMLKJIHGFEDCBA"
// let lettermap = new Map();
// for(let i=1;i<=26;i++){
//     lettermap.set(i,letters[i-1])
// }lettermap.set(0,letters[25])
while(noOfTestCases--){
	let colNum = parseInt(readLine());
    let colName = ""
	while(colNum){
        let colVal = colNum%26
        colNum = parseInt(colNum/26);
        colNum = colVal?colNum:colNum-1;
        colVal = colVal?colVal:26
        
        colName = String.fromCodePoint(91-colVal) + colName
    }console.log(colName);
}