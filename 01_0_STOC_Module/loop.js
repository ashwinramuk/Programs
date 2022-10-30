let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// let size = parseInt(readLine());
// let a = parseInt(readLine());
// let count = 1;
// for(i=1;i<size;i++){
// 	let num = parseInt(readLine());
// 	if(a === num){
// 		count = count + 1;
//     }
// }
// console.log(count);

// let size = parseInt(readLine());
// let odd=0, even = 0;
// for(let i=0;i<size;i++){
// 	let num = parseInt(readLine());
// 	if(num%2){
// 		odd++;
// 	}else{
// 		even++;
// 	}
// }
// console.log(odd);
// console.log(even);

