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
class HopRacing{
	constructor(id){
		this.id = id;
		this.round = 0;
	}
	hop(stepsPerRound){
		this.round++;
	}
	getRounds(){
		return this.round;
	}
}
let noOfRowsOfData = parseInt(readLine());
let hopper1 = new HopRacing(1);
let hopper2 = new HopRacing(2);
for(let i=0;i<noOfRowsOfData;i++){
	let [hopperID, noOfHops] = readLine().split(" ")
	hopperID==="1"?hopper1.hop(noOfHops):hopper2.hop(noOfHops)
}
let hopper1round = hopper1.getRounds();let hopper2round = hopper2.getRounds();
console.log(hopper1round===hopper2round?hopper1.id:hopper1round>hopper2round?hopper2.id:hopper1.id)