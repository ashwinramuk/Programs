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
function isValid(board){
let rowSet = [];let colSet=[];let subBoxSet =[];
let i=0;let countsubBox=Array(9).fill(0);let countcol=Array(9).fill(0);
for(;i<board.length;i++){
    let countrow=0;
    rowSet[i] = new Set();
    for(let j=0;j<board[0].length;j++){
        if(i===0) {colSet[j]= new Set();}
        if(board[i][j]!=="."){
            rowSet[i].add(board[i][j]);countrow++;
            colSet[j].add(board[i][j]);countcol[j]++;
        if(i<3&&j<3){
            let k=0
            if(subBoxSet[k]===undefined) subBoxSet[k] = new Set();
            subBoxSet[k].add(board[i][j])
            countsubBox[k]++
        }
        else if(i<3&&j<6){
            let k=1
            if(subBoxSet[k]===undefined) subBoxSet[k] = new Set();
            subBoxSet[k].add(board[i][j])
            countsubBox[k]++

        }
        else if(i<3&&j<9){
            let k=2
            if(subBoxSet[k]===undefined) subBoxSet[k] = new Set();
            subBoxSet[k].add(board[i][j])
            countsubBox[k]++

        }
        else if(i<6&&j<3){
            let k=3
            if(subBoxSet[k]===undefined) subBoxSet[k] = new Set();
            subBoxSet[k].add(board[i][j])
            countsubBox[k]++

        }
        else if(i<6&&j<6){
            let k=4
            if(subBoxSet[k]===undefined) subBoxSet[k] = new Set();
            subBoxSet[k].add(board[i][j])
            countsubBox[k]++

        }
        else if(i<6&&j<9){
            let k=5
            if(subBoxSet[k]===undefined) subBoxSet[k] = new Set();
            subBoxSet[k].add(board[i][j])
            countsubBox[k]++

        }
        else if(i<9&&j<3){
            let k=6
            if(subBoxSet[k]===undefined) subBoxSet[k] = new Set();
            subBoxSet[k].add(board[i][j])
            countsubBox[k]++

        }
        else if(i<9&&j<6){
            let k=7
            if(subBoxSet[k]===undefined) subBoxSet[k] = new Set();
            subBoxSet[k].add(board[i][j])
            countsubBox[k]++

        }
        else if(i<9&&j<9){
            let k=8
            if(subBoxSet[k]===undefined) subBoxSet[k] = new Set();
            subBoxSet[k].add(board[i][j])
            countsubBox[k]++
        }
        }
    }if(rowSet[i].size!==countrow){return 'False'}
}for(let i=0;i<board[0].length;i++){
    if(colSet[i].size!==countcol[i]){return 'False'}
    if(subBoxSet[i].size!==countsubBox[i]){return 'False'}
}
return 'True'
}
let board = []
for(let i=0;i<9;i++){
	board[i]=readLine().split(" ");
}
console.log(isValid(board))

