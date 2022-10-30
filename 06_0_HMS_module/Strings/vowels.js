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
let wordSize = parseInt(readLine());
let word = readLine();
let isVowelThere = true;
let vowels = "aeiou"
for(let i=0;i<vowels.length;i++){
	let search = word.search(vowels[i])
	if(search == -1){isVowelThere = false}
}if(isVowelThere){console.log("YES");}
else {console.log("NO")}