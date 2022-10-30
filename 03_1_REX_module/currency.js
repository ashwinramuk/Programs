let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// let num=readLine().split("").map(Number)
// let len=num.length
// function coinValue(n,sum,l){
//     if(l==len) return sum
//     sum=sum+n[l]
//    return coinValue(n,sum,l+1)
// }
// console.log(coinValue(num,0,0))

function coinValue(coinArr,pos,sum=0){
	if(pos==len) return sum;
	sum += coinArr[pos];
	return coinValue(coinArr,++pos,sum)
}

let coinArr = readLine().split("").map(Number);
let len = coinArr.length;
console.log(coinValue(coinArr,0));