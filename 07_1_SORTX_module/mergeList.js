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
function mergeSortList(mat){
	let A = mat[0];let ans = [];
	for(let k=1;k<mat.length;k++){
		let B = mat[k]
		let i=0,j=0;
		while(i<A.length||j<B.length){
			if(B[j]<A[i]) ans.push(B[j++])
			else if(A[i]<B[j]) ans.push(A[i++]);
            else if(A[i]===undefined&&B[j]!==undefined) ans.push(B[j++])
            else ans.push(A[i++])
        }A = ans.splice(0)
	}return A
}
let noOfSortedList = parseInt(readLine());
let noOfElemInSortedList = parseInt(readLine());
let mat=[]
for(let i=0;i<noOfSortedList;i++){
	mat.push(readLine().split(" ").map(Number))
}
console.log(...mergeSortList(mat))
