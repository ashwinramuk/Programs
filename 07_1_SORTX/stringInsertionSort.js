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
function stringInsertionSort(s){
	let stringArr = s.split("");
	for(let i=1;i<stringArr.length;i++){
		let key = s.charCodeAt(i)
		let j = i-1
		while(j>=0&&stringArr[j].charCodeAt(0)>key){
			stringArr[j+1]=stringArr[j]
			j--;
		}stringArr[j+1]=String.fromCharCode(key)
	}return stringArr.join("")
}
let givenStr = readLine();
console.log(stringInsertionSort(givenStr))