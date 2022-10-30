let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}


let morseCodeArr = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."];
let alphabet = "abcdefghijklmnopqrstuvwxyz"
let codeMap = new Map();
for(let i=0;i<morseCodeArr.length;i++){
	codeMap.set(alphabet[i],morseCodeArr[i])
}
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
    let ansSet = new Set();
	let words = readLine().split(" ");
	for(let word of words){
		let temp = ''
		for(let i=0;i<word.length;i++){
			temp += codeMap.get(word[i])
		}ansSet.add(temp)
	}//console.log(ansSet)
    console.log(ansSet.size)
}