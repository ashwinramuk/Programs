let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine());
while(n>0){
	let b = readLine().split(" ");
	let berthNum = parseInt(b[0]);
	let seatNum = parseInt(b[1]);
	if (seatNum<1||seatNum>berthNum){console.log('Invalid');n--;continue;}
	let q = seatNum%8;
	if(q===0){console.log('SU');}
	else if(q===7){console.log('SL');}
	else if(q===1||q===4){console.log('L');}
	else if(q===2||q===5){console.log('M');}
	else {console.log('U');}
	n--;
}