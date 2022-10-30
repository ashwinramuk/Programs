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
class CarSell{
	constructor(){
		this.proposalAmountList = [];
	}
	getPromisingCustomers(){
		let flag=true;
		for(let i=0;i<this.proposalAmountList.length;i++){
			if(this.proposalAmountList[i] >= (0.9*1000000)){
				console.log(i);flag=false;
			}
		}if(flag){
			console.log(-1);
		}
	}
}
let noOfCustomers = parseInt(readLine());
let carSell = new CarSell();
for(let i=0;i<noOfCustomers;i++){
	carSell.proposalAmountList[i]=parseInt(readLine());
}
carSell.getPromisingCustomers();
