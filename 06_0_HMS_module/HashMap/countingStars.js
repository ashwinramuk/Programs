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
while(noOfTestCases--){
	let noOfStars = parseInt(readLine());
	let total=0;
	let str = readLine();
	let strmap = new Map();
	for(let i=0;i<str.length;i++){
		if(strmap.has(str[i])){
			strmap.set(str[i], strmap.get(str[i])+1);
		}else{
			strmap.set(str[i],0);
		}
	}for(let value of strmap.values()){
        total += (value*(value+1))/2;
    }console.log(total)
}