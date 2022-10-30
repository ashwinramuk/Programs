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
function unOrderedLinearSearch(List, queryNum){
    for(let i=0;i<List.length;i++){
        if(List[i]===queryNum){
            return i;
        }
    }return -1;
}
let k = parseInt(readLine());let A=[];
let sizeOfList = parseInt(readLine());
for(let i=0;i<sizeOfList;i++){
	A[i]=parseInt(readLine());
}
console.log(unOrderedLinearSearch(A,k))