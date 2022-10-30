s = "A man, a plan, a canal: Panama";
isPalindrome = function(s) {
    s=s.toLowerCase()
    let givenStr = '';
    let result=true;
    for(let i=0;i<s.length;i++){
        if(s.charCodeAt(i)>=97&&s.charCodeAt(i)<=122||s.charCodeAt(i)>=48&&s.charCodeAt(i)<=57){
            givenStr += s[i]
        }
    }
    for(let i=0,j=givenStr.length-1;i<=j;i++,j--){
        if(givenStr[i]!==givenStr[j]){
            result = false;
        }
    }
    return result;
};
console.log(isPalindrome(s));