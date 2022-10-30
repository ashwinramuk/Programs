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
// let arrLen = parseInt(readLine());
// let arrMap = new Map();
// let arrMapDup = new Map();
// let arr = [];
// for(let i=0;i<arrLen;i++){
// 	arr[i]=parseInt(readLine())
// 	if(!arrMap.has(arr[i])){
// 		arrMap.set(arr[i],0)
// 	}else{
// 		if(!arrMap.has(arr[i])){
// 			arrMap.set(arr[i],1)
// 		}else{
// 			arrMapDup.set(arr[i],arrMapDup.get(arr[i])+1)
// 		}
// 	}
// }for(let i=0;i<arrLen;i++){
// 	for(let keys of arrMap.keys()){
// 		if(keys>arr[i]){
//             if(arrMapDup.has(arr[i])){
// 				arrMap.set(keys,arrMapDup.get(keys)+1)
// 			}else{
//                 arrMap.set(keys,arrMap.get(keys)+1)
//             }	
// 		}
// 	}
// }for(let i=0;i<arrLen;i++){
// 	console.log(arrMap.get(arr[i]))
// }

let arrLen = parseInt(readLine());
let arrMap = new Map();
let arr = [];
for(let i=0;i<arrLen;i++){
	arr[i]=parseInt(readLine())
	arrMap.set(arr[i],0)
}
for(let i=0;i<arrLen;i++){
	for(let keys of arrMap.keys()){
        let val = arrMap.get(keys)
        arrMap.set(keys,keys>arr[i]?val+1:val)	
	}
}
for(let i=0;i<arrLen;i++){
	console.log(arrMap.get(arr[i]))
}