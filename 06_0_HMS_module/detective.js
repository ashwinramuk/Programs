let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
function guessPossible(msgRcvd,msgGssd){
	let msgMap = new Map();
	for(let i=0;i<msgRcvd.length;i++){
		if(!msgMap.has(msgRcvd[i])){
			msgMap.set(msgRcvd[i],1)
		}else{
			msgMap.set(msgRcvd[i],msgMap.get(msgRcvd[i])+1)
		}
	}
	for(let i=0;i<msgGssd.length;i++){
		if(msgMap.has(msgGssd[i])){
			if(msgMap.get(msgGssd[i])===1){
				msgMap.delete(msgGssd[i])
			}else{
				msgMap.set(msgGssd[i],msgMap.get(msgGssd[i])-1)
			}
		}else{
			return "NO"
		}
	}return "YES"
}
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let msgRcvd = readLine().split(" ").join("").toLowerCase()
	// console.log(msgRcvd)
	let msgGssd = readLine().split(" ").join("").toLowerCase()
	console.log(guessPossible(msgRcvd,msgGssd))
}