let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
// -------- Do NOT edit anything above this line ----------
// let size = parseInt(readLine());
// let n = [];
// let count=flag=0;
// for(let i=0; i<size;i++){
// 	n.push(parseInt(readLine()));
// }console.log(n)
// while(true){
// 	for(i=0;i<n.length-1;i++){
// 		if(n[i]>n[i+1]){
// 			temp=n[i]
// 			n[i]=n[i+1]
// 			n[i+1]=temp
// 			flag++
// 		}
// 	}if(flag===0){
// 		break;
// 	}flag=0
// }console.log(n)

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

// ---largest lucky number------

// let size = parseInt(readLine());
// let n = [];
// let r=[0];
// let count=num=0;
// for(let i=0; i<size;i++){
//     n.push(parseInt(readLine()));
// }
// while(true){
// for(i=0;i<n.length-1;i++){
// 	if(n[i]>n[i+1]){
// 		temp=n[i]
// 		n[i]=n[i+1]
// 		n[i+1]=temp
// 		num++
// 	}
// }if(num===0){
// 	break;
// }num=0
// }
// for(let i=0;i<n.length;i++){
// for(let j=0;j<n.length;j++){
//     if(n[i]===n[j]){
//         count++;
//     }
// }
// if(n[i]===count){
//     if(n[i]>r[0]){
//         r.unshift(n[i]);
//     }else{r.push(n[i]);}
// }count=0;
// }console.log(r[0]!==0?r[0]:-1);

//---------------without nested loop-----------------

let size = parseInt(readLine());
let n = [];
let count=1;
let flag =1;
// for(let i=0; i<size;i++){
//     n.push(parseInt(readLine()));
// }
// for(let i=0;i<size;i++){
//     console.log(n[i],n[i+1])
//     if(n[i]==n[i+1]){
//         count++;
//     }else{
//         if(count==n[i]){
//             console.log(n[i]);
//             flag=0
//             break;
//         }count=1
//     }
// }if(count===1 && flag!==0){
//     console.log(-1);
// }
//--------------one more improvement----------
n.push(parseInt(readLine()));
for(let i=0; i<size;i++){
	if(i<size-1){
        n.push(parseInt(readLine()));
    }
    if(n[i]==n[i+1]){
        count++;
    }else{
        if(count==n[i]){
            console.log(n[i]);
            flag=0
            break;
        }count=1
    }
}if(count===1 && flag!==0){
    console.log(-1);
}