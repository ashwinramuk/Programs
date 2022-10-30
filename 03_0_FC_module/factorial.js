// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
function factorial(number){
// write your code here
	return number?number>0?number*factorial(number-1):undefined:1

}

// let number = parseInt(readLine());

console.log(factorial(-1));