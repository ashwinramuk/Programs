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
function halfInsertion(s){
	let stringArr = s.split("");
	let startIdx = parseInt(stringArr.length/2)
	for(let i=startIdx+1;i<stringArr.length;i++){
		let key = s[i]
		let j = i-1
		while(j>=startIdx&&stringArr[j]>key){
			stringArr[j+1]=stringArr[j]
			j--;
		}stringArr[j+1]=key
	}return stringArr.join("")
}
let givenStr = readLine();
console.log(halfInsertion(givenStr))