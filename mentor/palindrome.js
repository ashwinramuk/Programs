let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let inp = parseInt(readLine());
//console.log(inp)
let sign = false
let temp;
if(inp<0){inp=inp*-1;sign=true;}
temp = inp
let rev = 0;
while(inp){
    rev = rev*10 + inp%10
    inp = parseInt(inp/10)
}//console.log(rev, temp)

if (rev==temp){
    if(sign){rev = rev*-1}
    console.log(rev, "is a Palindrome")
}else {
    if(sign){rev = rev*-1}
    console.log(rev, "is not a Palindrome")
}