// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
//let N = parseInt(readLine());
// let N =0
// let m=1
// let LPT=PT=[];
// while(N){
// 	for(let i=0;i<m;i++){
//         if(i===0) PT[0]=1
//         else if(i===m-1) PT[m-1]=1
// 		else PT[i] = LPT[i]+LPT[i-1]
// 	}LPT=PT.splice(0)
//     N--
// 	m++
// }for (element of LPT){
// 	console.log(element)
// }

//-----------Arockia's idea--------------

// let N = parseInt(readLine());
let N=6;
let res = (11**(N-1)).toString().split("");
for (e of res){
	console.log(e)
}