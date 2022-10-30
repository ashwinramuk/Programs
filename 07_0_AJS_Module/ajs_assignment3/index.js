// Reverse all words
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
function reverseWords(givenStr){
    function reverseWord(word){
        let reverseWord = ''
        for(let i=word.length-1;i>=0;i--){
            reverseWord += word[i]
        }return reverseWord
    }
    let strArr = givenStr.split(" ")
    for(let i=0;i<strArr.length;i++){
        strArr[i] = reverseWord(strArr[i])
    }
    return strArr.join(" ")
}
let no_of_testCases = parseInt(readLine())
while(no_of_testCases--){
    console.log(reverseWords(readLine()))
}

