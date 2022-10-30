let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// function reverseString(CharsArr){
//     return CharsArr.length!==1?CharsArr[CharsArr.length-1]+reverseString(CharsArr.splice(0,CharsArr.length-1)):CharsArr[0]
// }
// let noOfTestCases = parseInt(readLine());
// while(noOfTestCases--){
// 	let givenString = readLine();
// 	console.log(givenString==reverseString(givenString.split(""))?"True":"False");
// }

//----------improvement--------------
function isPalindrome(str, left=0, right=str.length-1){
    return str[left]===str[right]?left<=right?isPalindrome(str, ++left,--right):"True":"False"
}
let noOfTestCases = parseInt(readLine());
while(noOfTestCases--){
	console.log(isPalindrome(readLine()));
}