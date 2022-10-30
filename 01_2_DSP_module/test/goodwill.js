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
let n = parseInt(readLine());
let arr=[]
if(n%2)	for(let i=1;i<=2*n-1;i++)arr.push(i%2?"*":"$")
else for(let i=1;i<=2*n-1;i++)arr.push(i%2?"$":"*")
let i=0,j=arr.length-1;let ansarr=[]
while(i<=j){
    ansarr.push(arr.join(""))
    arr[i++]=arr[j--]=" "
}
for(let i=ansarr.length-1;i>=0;i--){
    console.log(ansarr[i])
}