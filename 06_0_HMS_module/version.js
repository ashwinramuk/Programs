// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }

// // -------- Do NOT edit anything above this line ----------
// // Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// let noOfTestCases = parseInt(readLine());
// while(noOfTestCases--){
// 	let version = readLine().split(" ");
// 	let version1 = version[0].split(".").map(Number);
// 	let version2 = version[1].split(".").map(Number);
//     let i=0, j=0;
//     while(true){
        
//         if(version1[i]===undefined&&version2[j]!==undefined) version1[i]=0;
//         if(version2[j]===undefined&&version1[i]!==undefined) version2[j]=0;
//         if(version1[i]>version2[j]){
//             console.log(1);break
//         }else if(version1[i]<version2[j]){
//             console.log(-1);break
//         }else if(version1[i]===version2[j]){
//             i++;j++;
//         }
//         if(i===version1.length&&j===version2.length){
//             console.log(0);break
//         }
//     }
// }

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
function compareVersions(v1,v2){
	let len=Math.max(v1.length,v2.length),i=0;
	while(i<len){
		let n1 = v1[i]|0
        let n2 = v2[i]|0
		if(n1===n2){
			i++;
		}else if(n1>n2){
			return 1
		}else{
			return -1
		}
	}return 0
}
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	let version = readLine().split(" ")
	let version1 = version[0].split(".").map(Number)
	let version2 = version[1].split(".").map(Number)
	console.log(compareVersions(version1,version2))
}