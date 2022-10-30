let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
class InputReader {
	//implement the methods here 
	readStrings(sz){
		for(let i=0;i<sz;i++){
			console.log(i, readLine());
		}
	}
	readIntegers(sz){
		for(let i=0;i<sz;i++){
			console.log(i, parseInt(readLine()));
		}
	}
	readFloats(sz){
		for(let i=0;i<sz;i++){
			console.log(i, parseFloat(readLine()).toFixed(2));
		}
	}


};

// -------- Do NOT edit anything below this line ----------

let num = parseInt(readLine());
let typeOfInput = readLine();
console.log(typeOfInput)
let NewInputReader = new InputReader();	
if (typeOfInput === "string\r") {
	NewInputReader.readStrings(num);
} else if (typeOfInput === "integer") {
    console.log("inside int")
	NewInputReader.readIntegers(num);
} else {
	NewInputReader.readFloats(num);
}