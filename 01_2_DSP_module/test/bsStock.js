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
let stockPriceArr=[];
for(let i=0;i<noOfDays;i++){
	stockPriceArr.push(parseInt(readLine()))
}//console.log(stockPriceArr)
let maxRight = maxProfit= -1/0;let min = 1/0;
let maxRightArr = new Array(stockPriceArr.length);
maxRightArr[stockPriceArr.length-1] = stockPriceArr[stockPriceArr.length-1]
for(let i=stockPriceArr.length-2;i>=0;i--){
    maxRight = Math.max(maxRight,stockPriceArr[i+1])
    maxRightArr[i] = maxRight
}
for(let i=0;i<maxRightArr.length;i++){
    console.log(stockPriceArr[i],maxRightArr[i])
	maxProfit = Math.max(maxProfit, maxRightArr[i]-stockPriceArr[i])
}console.log(maxProfit)
