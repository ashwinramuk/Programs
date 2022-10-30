let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
/*
function transposeMatrix(ls) {
	let t = [];
	for(let i=0; i < ls[i].length; i++){
		t[i] = [];
		for(let j=0; j<ls.length; j++){
			t[i][j]=ls[j][i];
		}
	}return t;
}
let list = [];
let m = parseInt(readLine());
let r = [];
for(let i=0;i<m;i++){
	r = readLine().split(" ");
    list[i]=[];
	for(let j=0;j<r.length;j++){
		list[i][j] = parseInt(r[j]);
	}	
}
let res = transposeMatrix(list);
for(let i=0; i<res.length;i++){
	console.log(...res[i]);
}
*/
//----------------direct transpose-------------------

let list = [];
let m = parseInt(readLine());
let r = [];
for(let i=0;i<m;i++){
	r = readLine().split(" ");
    for(let j=0;j<r.length;j++){
        if(i===0){list[j] = [];}
		list[j][i] = r[j];
	}	
}for(let i=0;i<list.length;i++){console.log(...list[i]);}
