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
// --------------My logic---------

// let arr = readLine().split(" ");
// console.log(arr);
// let arrr=[]
// for(let i=0;i<arr.length;i++){
//     arrr[i]=0;
// }

// // let arrr=[];
// // console.log(arrr);
// let m = parseInt(readLine());
// for(let i=0;i<arr.length;i++){
// 	let n = (i+m)%arr.length;
//     arrr[n]=arr[i];

// }
// for(let i=0; i<arrr.length;i++){
// 	console.log(arrr[i]);
// }

//-------------Through group mentoring----------------

// let numinpt = readLine().split(" ");    // 2 1 3 4 5 10
// let rotatenum = parseInt(readLine());   // 3
// rotatenum = rotatenum%numinpt.length;
// //console.log(rotatenum);
// let arr = [];

// for(let i=numinpt.length-rotatenum;i<numinpt.length;i++){
//     arr.push(numinpt[i]);
// }
// //console.log(arr);

// for(let i = 0;i<numinpt.length-rotatenum;i++){
//     arr.push(numinpt[i]);
// }
// for(let j =0;j<arr.length;j++){
// console.log(arr[j]);
// }

// -----------Aditi-----------
// let arr = readLine().split(" ");
// let m = parseInt(readLine());
// let j = arr.length - m;
// let i = 0 ;
// while(i!==j){
//   let temp = arr[i];
//   arr[i] = arr[j];
//   arr[j] = temp;
//   i++;
//   }
// for(let i =0; i<arr.length;i++){
//   console.log(arr[i]);
// }

//------------Mine improve---------
let arr = readLine().split(" ");
let m = parseInt(readLine());
let count=0;
let i=(arr.length-m);
while(count!==arr.length){
	i=i%arr.length;
  console.log(arr[i]);
  i++;
  count++;
}
