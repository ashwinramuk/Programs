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
let noOfSocks = parseInt(readLine());
let socksColorArr = readLine().split(" ");
let socksColorMap = new Map();
for(let i=0;i<noOfSocks;i++){
	if(!socksColorMap.has(socksColorArr[i])){
		socksColorMap.set(socksColorArr[i],1)
	}
	else{
		socksColorMap.set(socksColorArr[i],socksColorMap.get(socksColorArr[i])+1)
	}
}//console.log(socksColorMap)
let totalSockPairs = 0;
for(let val of socksColorMap.values()){
	if(val>0){
		totalSockPairs += parseInt(val/2);
	}
}console.log(totalSockPairs)