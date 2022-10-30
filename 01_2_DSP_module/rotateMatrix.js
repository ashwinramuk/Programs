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
let noOfRows = parseInt(readLine());
let mat = []; let rotMat = [];
for(let i=0;i<noOfRows;i++){
	mat[i] = readLine().split(" ").map(Number);
	for(let j=0;j<mat[0].length;j++){
        if(i===0) rotMat[j]=[];
		rotMat[j][noOfRows-1-i]=mat[i][j]
	}
}
console.log(rotMat.length);
for(let row of rotMat){
	console.log(...row)
}