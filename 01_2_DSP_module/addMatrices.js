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
function addMatrices(m1, m2){
	if(m1.length!==m2.length||m1[0].length!==m2[0].length){
		return -1;
	}else{
		let m3=[]
		for(let i=0;i<m1.length;i++){
			m3[i]=[];
			for(let j=0;j<m1[0].length;j++){
				m3[i][j]=m1[i][j]+m2[i][j];
			}
		}return m3;
	}

}
let matrix1 = [];
let noOfRowsMatrix1 = parseInt(readLine());
for(i=0;i<noOfRowsMatrix1;i++){
	matrix1[i] = readLine().split(" ").map(Number);
}
let matrix2 = [];
let noOfRowsMatrix2 = parseInt(readLine());
for(i=0;i<noOfRowsMatrix2;i++){
	matrix2[i] = readLine().split(" ").map(Number);
}
let matrix3 = addMatrices(matrix1,matrix2);
if(matrix3===-1){console.log(-1)}
else{
	for(let row of matrix3){
		console.log(...row)
	}
}
