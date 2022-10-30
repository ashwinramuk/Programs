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
// function chessPlay(x,y,m){
// 	if(m===0) return 0;
//     // console.log("x,y,m",x,y,m)
// 	let count = 8;
// 	if(x>2&&x<9){
// 		if(y>2&&y<9){
// 			count -= 0;
// 		}else if(y===2||y===9){
// 			count -= 2;
// 		}else if(y===1||y===10){
// 			count -= 4;
// 		}
// 	}else if(x===2||x===9){
// 		if(y>2&&y<9){
// 			count -= 2;
// 		}else if(y===2||y===9){
// 			count -= 4;
// 		}else if(y===1||y===10){
// 			count -= 5;
// 		}
// 	}else if(x===1||x===10){
// 		if(y>2&&y<9){
// 			count -= 4;
// 		}else if(y===2||y===9){
// 			count -= 5;
// 		}else if(y===1||y===10){
// 			count -= 6;
// 		}
// 	}//console.log("countOut",count)
// //    if(m>0){
//     m--;
//     let possXCoorArr = [x-1,x-2,x+1,x+2,x-1,x-2,x+1,x+2]
//     let possYCoorArr = [y-2,y-1,y+2,y+1,y+2,y+1,y-2,y-1]
//     // console.log(possXCoorArr,possYCoorArr)
//     for(let i=0;i<possXCoorArr.length;i++){
//         if(possXCoorArr[i]>0&&possYCoorArr[i]>0&&possXCoorArr[i]<11&&possYCoorArr[i]<11){
//             let possiblePosCoor = ""+possXCoorArr[i] +","+ possYCoorArr[i]
//             // console.log(possiblePosCoor)
//             if(m===0){
//                 possiblePos.set(possiblePosCoor ,m)
//             }
            
//             // console.log("inside else", m)
//             count += chessPlay(possXCoorArr[i],possYCoorArr[i],m)
            
//             // console.log("countIn", count)
//         }
        
//     }
//     // }
//     // console.log(possiblePos)
// 	//return count+chessPlay(x-1,y-2,m)+chessPlay(x-2,y-1,m)+chessPlay(x+1,y+2,m)+chessPlay(x+2,y+1,m)+chessPlay(x-1,y+2,m)+chessPlay(x-2,y+1,m)+chessPlay(x+1,y-2,m)+chessPlay(x+2,y-1,m)
//     return possiblePos.size
// }
// let inp = readLine().split(" ");
// let xCor = parseInt(inp[0]);
// let yCor = parseInt(inp[1]);
// let noOfMoves = parseInt(inp[2]);
// let possiblePos = new Map();
// console.log(chessPlay(xCor,yCor,noOfMoves))
function chessPlay(x,y,m){
	if(m===0) return 0;
    m--;
    let possXCoorArr = [x-1,x-2,x+1,x+2,x-1,x-2,x+1,x+2]
    let possYCoorArr = [y-2,y-1,y+2,y+1,y+2,y+1,y-2,y-1]
    for(let i=0;i<possXCoorArr.length;i++){
        if(possXCoorArr[i]>0&&possYCoorArr[i]>0&&possXCoorArr[i]<11&&possYCoorArr[i]<11){
            let possiblePosCoor = possXCoorArr[i] +","+ possYCoorArr[i]
            if(m===0){possiblePos.set(possiblePosCoor ,m)}
            chessPlay(possXCoorArr[i],possYCoorArr[i],m)
        }   
    }return possiblePos.size
}
let inp = readLine().split(" ");
let xCor = parseInt(inp[0]);
let yCor = parseInt(inp[1]);
let noOfMoves = parseInt(inp[2]);
let possiblePos = new Map();
console.log(chessPlay(xCor,yCor,noOfMoves));