let s1 = "ABCD"
let s2 = "DABC"
let j = s2.indexOf(s1[0])
let result = "Yes"
for(let i=0;i<s1.length;i++){
    console.log(i,j+i, (j+i)%s2.length)
    if(s1[i]!==s2[(j+i)%s2.length]) {result = "No";break}
}console.log(result)