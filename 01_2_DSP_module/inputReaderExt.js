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
	read_strings(n){
		let strArr = []
		for(let i=0;i<n;i++){
			strArr[i] = readLine();
			// console.log(i,strArr[i]);
		}InputReader.printer(strArr)
		return strArr
	}
	read_integers(n){
		let intArr = []
		for(let i=0;i<n;i++){
			intArr[i] = parseInt(readLine());
			// console.log(i,intArr[i]);
		}InputReader.printer(intArr)
		return intArr
	}
	read_floats(n){
		let floatArr=[]
		for(let i=0;i<n;i++){
			floatArr[i] = parseFloat(readLine()).toFixed(2)
			// console.log(i,floatArr[i]);
		}InputReader.printer(floatArr)
		return floatArr
	}
	static printer(inpArr){
		for(let i=0;i<inpArr.length;i++){
			console.log(i,inpArr[i])
		}
	}
}
let size = parseInt(readLine());
let type = readLine();
let reader = new InputReader();
if(type==="string"){
	reader.read_strings(size);
}else if(type==="integer"){
	reader.read_integers(size);
}else{
	reader.read_floats(size);
}
 