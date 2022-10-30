let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let size = parseInt(readLine());
while(size>0){
    console.log(size)
	let n = parseInt(readLine());
	if(n<2){console.log('No');size--;continue;}
    let i=2
	for (;i<n;i++){
		if(n%i===0){console.log('No');break;}
	}if(i===n){console.log('Yes');}
    size--;
}