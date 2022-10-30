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
function compress_String(st){
	let s = st[0]; let count=1;
	for(let i=1;i<st.length;i++){
		if(st[i]===st[i-1]){
			count++;
		}else{
			if(count>1){
				s += `${count}`
			}count=1;
			s += st[i];
		}
	}if(count>1){
        s += `${count}`
    }return s
}
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	console.log(compress_String(readLine()));
}