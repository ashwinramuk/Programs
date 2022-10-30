let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
let morseCode = [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
let noOfTestCases = parseInt(readLine())
let codeSetArr = []
while(noOfTestCases--){
    let givenStr = readLine().split(" ")
    let codeSet = new Set()
    for(let i=0;i<givenStr.length;i++){
        givenStr[i]=givenStr[i].toLowerCase()
        let temp=''
        for(let j=0;j<givenStr[i].length;j++){
            temp += morseCode[givenStr[i][j].charCodeAt(0)-97]
        }codeSet.add(temp)
    }console.log(codeSet.size)
    codeSetArr.push([...codeSet])
}
let commonSet = new Set(codeSetArr[0])
console.log(codeSetArr)
let ans = []
for(let i=0;i<codeSetArr[1].length;i++){
    if(commonSet.has(codeSetArr[1][i])) ans.push(codeSetArr[1][i])
}console.log(ans)

