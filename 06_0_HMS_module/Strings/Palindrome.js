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
// let word = readLine();
// let isPalindrome = "YES"
// for(let i=0,j=word.length-1;i<j;i++,j--){
//     let AsciiDiff = Math.abs(word.charCodeAt(i)-word.charCodeAt(j));
//     if(AsciiDiff!==0){
// 		if(AsciiDiff!==32){
// 			isPalindrome = "NO";
//             break;
// 		}
// 	}
// }
// console.log(isPalindrome)

let String = readLine();
let newString = "";
for( let i = String.length - 1  ; i >= 0; i--){
newString = newString + String[i];
}
if(String === newString){
    console.log("YES");
}else{
    console.log("NO")
}
