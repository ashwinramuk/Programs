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
let noOfShoes = parseInt(readLine());
let shoeSizeArr = readLine().split(" ").map(Number);
let shoeSizeMap = new Map();
for(let i=0;i<noOfShoes;i++){
	if(!shoeSizeMap.has(shoeSizeArr[i])){
		shoeSizeMap.set(shoeSizeArr[i],1)
	}else{
		shoeSizeMap.set(shoeSizeArr[i],shoeSizeMap.get(shoeSizeArr[i])+1)
	}
}
let noOfCustomers = parseInt(readLine());
let totalMoneyEarned = 0;
for(let i=0;i<noOfCustomers;i++){
	let [shoeSize, shoePrice] = readLine().split(" ").map(Number);
	if(shoeSizeMap.has(shoeSize)){
		if(shoeSizeMap.get(shoeSize)!==0){
			shoeSizeMap.set(shoeSize,shoeSizeMap.get(shoeSize)-1)
			totalMoneyEarned += shoePrice;
		}
	}
}
console.log(totalMoneyEarned);