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
class InputReader{
	constructor(){
		// this.str = '';
		// this.int;
		// this.float;
	}
	readStrings(n){
		let strArr = []
		for(let i=0;i<n;i++){
			strArr[i] = readLine();
			console.log(i,strArr[i]);
		}return strArr
	}
	readIntegers(n){
		let intArr = []
		for(let i=0;i<n;i++){
			intArr[i] = parseInt(readLine());
			console.log(i,intArr[i]);
		}return intArr
	}
	readFloats(n){
		let floatArr=[]
		for(let i=0;i<n;i++){
			floatArr[i] = parseFloat(readLine()).toFixed(2)
			console.log(i,floatArr[i]);
		}return floatArr
	}
}
let size = parseInt(readLine());
let type = readLine();
let reader = new InputReader();
if(type==="string"){
	reader.readStrings(size);
}else if(type==="integer"){
	reader.readIntegers(size);
}else{
	reader.readFloats(size);
}
 