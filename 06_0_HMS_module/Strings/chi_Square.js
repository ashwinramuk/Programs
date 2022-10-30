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
	let givenStr = readLine();
	let strlen = givenStr.length;
    let count=0;
	let letters = new Map();
	for(let i=0;i<strlen;i++){
		if(letters.has(givenStr[i])){
			letters.set(givenStr[i],letters.get(givenStr[i])+1);
		}else{
			letters.set(givenStr[i],1)
		}
	}//console.log(letters)
    for(let value of letters.values()){
        if(value%2!==0){
            count++
        }
    }console.log(count?count-1:0)
}