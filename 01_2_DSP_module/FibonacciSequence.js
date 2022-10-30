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
let noOfTerms = parseInt(readLine());
let Fn2 = 0, Fn1 = 1;let Fn=0;
if(noOfTerms>0){
	for(let i=0;i<noOfTerms;i++){
		if(i<2)console.log(i);
		else {
			Fn = Fn1+Fn2
			console.log(Fn)
            Fn2 = Fn1;
		    Fn1 = Fn;
		}
	}
}else console.log(-1)
//-------------try recursion----------------
