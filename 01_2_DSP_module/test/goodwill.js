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
let order = parseInt(readLine());
let str = ""
if(order%2){
	for(let i=1;i<=2*order-1;i++){
		str+= i%2?"*":"$"
	}
}else{
	for(let i=1;i<=2*order-1;i++){
		str+= i%2?"$":"*"
	}
}//console.log(str)
let strArr = str.split("")
let ansArr=[strArr.join("")];
let i=0,j=strArr.length-1;
while(i<j){
    strArr[i]=strArr[j]=" "
    ansArr.push(strArr.join(""))
    i++;j--
}
for(let i=ansArr.length-1;i>=0;i--){
    console.log(ansArr[i])
}