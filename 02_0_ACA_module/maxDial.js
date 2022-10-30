let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let dial = parseInt(readLine());
let maxDial = parseInt(readLine());
let input = parseInt(readLine());
let ary = [];                         
let inputAry = [];
for(let i = 0; i< input; i++)  {
    inputAry.push(parseInt(readLine()));
}
let i = 0
for(; i< input; i++)  {
    if(ary[inputAry[i]] === undefined) ary[inputAry[i]] = 1;
    else ary[inputAry[i]]++;
    if(ary[inputAry[i]]===maxDial) {console.log(inputAry[i]);break;}
}
if (i===input) console.log(0);