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
let morseCodeForAlpha = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// let alphabet = "abcdefghijklmnopqrstuvwxyz"
// let codemap = new Map();
// for(let i=0;i<alphabet.length;i++){
// 	codemap.set(alphabet[i],morseCodeForAlpha[i])
// }
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let words = readLine().split(" ");
	let wordmap = new Map();
	for(let i=0;i<words.length;i++){
		let codeWord = '';
		let wordLen = words[i].length;
		for(let j=0;j<wordLen;j++){
			// codeWord += codemap.get(words[i][j])
			codeWord += morseCodeForAlpha[words[i].charCodeAt(j)-97]
            //console.log(words[i][j],codemap.get(words[i][j]))
		}//console.log(words[i],codeWord)
        wordmap.set(codeWord,words[i])
	}console.log(wordmap.size)
}

//-------u can use keys to further optimise--------

