let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let sz = readLine().split(" ");
let n = parseInt(sz[0]), m = parseInt(sz[1]);
let mat = [];
let sum = 0;
for(let i=0;i<n;i++){
	mat[i] = readLine().split(" ")
	for(let j=0;j<m;j++){
		mat[i][j] = parseInt(mat[i][j])
		if(mat[i][j]%2===1) sum += mat[i][j]
	}
}console.log(sum);
