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
	for(let row=0;row<9;row++){
		let set = new Set();
		for(let col=0;col<9;col++){
			if(set.has(board[row][col])&&board[row][col]!=="."){
				return "False"
			}
			else{
				set.add(board[row][col])
			}
		}
	}
	for(let col=0;col<9;col++){
		let set = new Set();
		for(let row=0;row<9;row++){
			if(set.has(board[row][col])&&board[row][col]!=="."){
				return "False"
			}
			else{
				set.add(board[row][col])
			}
		}
	}
	for(let i=0;i<9;i=i+3){
		for(let j=0;j<9;j=j+3){
			let set = new Set();
			for(let row=i;row<3;row++){
				for(let col=j;col<3;col++){
					if(set.has(board[row][col])&&board[row][col]!=="."){
						return "False"
					}
					else{
						set.add(board[row][col])
					}
				}
			}
		}
	}
	return 'True'
}
let board = []
for(let i=0;i<9;i++){
	board[i]=readLine().split(" ");
}
console.log(isValid(board))