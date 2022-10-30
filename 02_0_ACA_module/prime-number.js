let fs = require("fs");
const { arrayBuffer } = require("stream/consumers");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// let i=j=0;
// let n=parseInt(readLine());
// for(j=3;j<n+1;j++){
//     for(i=2;i<j;i++){
//         if(j%i===0){
//             console.log('%d is Not a Prime Number',j)
//             break;
//         }
//     }
//     if(i===j){
//         console.log('%d is a Prime Number',j)
//     }
// }

//-----------------------Another approach-------
// let n=parseInt(readLine());
// let arr=[]
// for(i=0;i<n+1;i++){
//     arr.push(0);
// }
// arr[1]=1;
// for(i=2;i<n+1;i++){
//     for(let j=2*i;j<n+1;j+i){
//         arr[j]=1;
//     }
// }
// for(i=1;i<n+1;i++){
//     if(arr[i]===0){
//         console.log(i);
//     }
// }

//-----------------improve of above one-----

// let n=parseInt(readLine());
// let arr=[]
// for(i=0;i<n+1;i++){
//     arr.push(0);
// }
// arr[1]=1;
// for(i=2;i<n+1;i++){
//     if(arr[i]===0){
//         console.log(i);
//     }
//     for(let j=2*i;j<n+1;j+i){
//         arr[j]=1;
//     }
// }

//---------------Further improvement----------
// let n=parseInt(readLine());
// let arr=[];
// for(let i=0;i<n+1;i++){
//     arr.push(0);
// }console.log(arr);
// arr[1]=1;
// for(let i=2;i<n;i++){
//     if(arr[i]===0){
//         console.log(i);
//         for(let j=2*i;j<n+1;j += i){
//             arr[j]=1;
//         }
//     } 
// }console.log(arr);

//-------------------------------------------------------------
let size = parseInt(readLine());
let n = [];
let r = [0];
let count=flag=0;
for(let i=0; i<size;i++){
	n.push(parseInt(readLine()));
}
while(true){
	for(i=0;i<n.length-1;i++){
		if(n[i]>n[i+1]){
			let temp=n[i]
			n[i]=n[i+1]
			n[i+1]=temp
			flag++
		}
	}if(flag===0){
		break;
	}flag=0
}

// for(let i=0;i<n.length;i++){
// 	for(let j=0;j<n.length;j++){
// 		if(n[i]===n[j]){
// 			count++;
// 		}
// 	}
// 	if(n[i]===count){
// 		console.log(n[i]);
// 		break;
// 	}count=0;
// }
// if(count===0){
// 	console.log(-1);
// }
let k=0;
for(;k<n.length;){
for(let j=0;j<n.length;j++){
    if(n[k]===n[j]){
        count++;
    }
}
if(n[k]===count){
	break;
}else{
    k=k+count
}count=0;
}console.log(count===n[k]?n[k]:-1);