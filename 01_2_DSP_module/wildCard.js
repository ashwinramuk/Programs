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
let givenStr = readLine().split("");
let count=0;
for(let i=0;i<givenStr.length;i++){
	count += givenStr[i]==="?"?1:0;
}
let Num = 0;let posNum;
while(Num<2**count){
	posNum = Num.toString(2);
    let k=posNum.length-1;let ans='';
    for(let j=givenStr.length-1;j>=0;j--){
        if(givenStr[j]==="?"){
            if(posNum[k]!==undefined){
                ans=posNum[k]+ans;
                k--;
            }else{
                ans=0+ans;
            }    
        }else{
            ans = givenStr[j]+ans
        }
    }console.log(ans);Num++
}

