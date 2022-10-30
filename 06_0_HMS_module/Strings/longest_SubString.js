let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// let noOfTestCases = parseInt(readLine()); 
// while(noOfTestCases--){
// 	let lastOcc = new Array(256).fill(-1);
//     let str = readLine();                            //abccabd
//     let maxCount=0;                                  //0123456
//     let start=0;
//     for(let i=0;i<str.length;i++){                   // i=0123
//         if(lastOcc[str.charCodeAt(i)]===-1){         // start = 000
//             // start = Math.max(start,0)             // 
//             maxCount = Math.max(maxCount, i-start+1) // maxCount = 123
//         }else{
//             start=Math.max(start, 1+lastOcc[str.charCodeAt(i)]); //start = 1
//             maxCount = Math.max(maxCount, i-start+1)             //maxCount =
//         }
//         lastOcc[str.charCodeAt(i)]=i;
//     }
//     console.log(maxCount)
// }

let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let lastOcc = new Array(256).fill(-1);
    let str = readLine();
    let maxCount=0;
    let startpos=0;
    for(let i=0;i<str.length;i++){
        if(lastOcc[str.charCodeAt(i)]===-1){
			//startpos = Math.max(startpos,0);
            maxCount = Math.max(maxCount, i-startpos+1);
        }else{
            startpos = Math.max(startpos, 1+lastOcc[str.charCodeAt(i)]);
            maxCount = Math.max(maxCount, i-startpos+1);
        }
		lastOcc[str.charCodeAt(i)] = i;
    }
    console.log(maxCount);
}