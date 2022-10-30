let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let msgRcvd = readLine().toLowerCase();
	let msgGesd = readLine().toLowerCase();
	let msgMap = new Map();
    let flag = true
	for(let i=0;i<msgRcvd.length;i++){
		if(!msgMap.has(msgRcvd[i])){
			msgMap.set(msgRcvd[i],1)
		}else{
			msgMap.set(msgRcvd[i],msgMap.get(msgRcvd[i])+1)
		}
	}for(let i=0;i<msgGesd.length;i++){
		if(!msgMap.has(msgGesd[i])){
			console.log("NO");flag=false;break;
		}else{
            // console.log(msgGesd[i],msgMap.get(msgGesd[i]))
			if(msgMap.get(msgGesd[i])>1){
				msgMap.set(msgGesd[i],msgMap.get(msgGesd[i])-1)
			}else{
				msgMap.delete(msgGesd[i])
			}	
		}
	}if(flag) console.log("YES")
}