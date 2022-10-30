let s = "codeleet", indices = [4,5,6,7,0,2,1,3] 
let out=[];let idx;
for (let i=0;i<s.length;i++){
    idx = indices[i];
    out[idx] = s[i]
}console.log(out.join(""))