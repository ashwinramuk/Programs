// Lucky_Sevens
// Snippet for getting input
let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// main code
function lucky_sevens(intArr){
    for(let i=0;i<intArr.length-2;i++){
        if(intArr[i]+intArr[i+1]+intArr[i+2]===7) return true
    }return false
}
let no_of_testCases = parseInt(readLine())
while(no_of_testCases--){
    let arr = readLine().split(" ").map(Number)
    console.log(lucky_sevens(arr))
}

