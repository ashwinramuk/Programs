// Unique Elements from array
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
function removeDuplicates(intArr){
    return new Set(intArr)
}

let no_of_testCases = parseInt(readLine())
while(no_of_testCases--){
    let arr = readLine().split(" ").map(Number)
    console.log(...removeDuplicates(arr))
}
//using includes
// let input =readLine().split(" ").map(Number)
// let arr=[]
// for(let i=0;i<input.length;i++){
//     if(!arr.includes(input[i])){
//         arr.push(input[i])
//     }
// }
// console.log(...arr)

let arr = [1,2,3,4,5];
__proto__.arr