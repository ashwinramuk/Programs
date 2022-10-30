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
let noOfHouseholds = parseInt(readLine());
let incomeArr=[];let noOfChildrenArr=[];
let countOfHouseWithChildTwoAbove=incomeOfHouseWithChildTwoAbove=0
let avgIncome = -1;
for(let i=0;i<noOfHouseholds;i++){
	incomeArr.push(parseInt(readLine()));
}
for(let i=0;i<noOfHouseholds;i++){
	noOfChildrenArr.push(parseInt(readLine()));
	if(noOfChildrenArr[i]>2){
		countOfHouseWithChildTwoAbove++;
		incomeOfHouseWithChildTwoAbove += incomeArr[i];
	}
}if(countOfHouseWithChildTwoAbove!==0){
    avgIncome = parseInt(incomeOfHouseWithChildTwoAbove/countOfHouseWithChildTwoAbove);
}
console.log(avgIncome);