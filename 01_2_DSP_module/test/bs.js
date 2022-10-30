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
let noOfDays = parseInt(readLine());
let stockPriceArr = []
while(noOfDays--){
	stockPriceArr.push(parseInt(readLine()));
}
let max=profit=-1/0;
for(let j=stockPriceArr.length-1;j>=0;j--){
    max=Math.max(max,stockPriceArr[j])
    // console.log(max)
    profit = Math.max(profit,max-stockPriceArr[j])
    // console.log(profit)
}console.log(profit)