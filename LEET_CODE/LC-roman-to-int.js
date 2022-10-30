
let s = "XIV"
let sym = "IVXLCDM";
let val = [1,5,10,50,100,500,1000];
sym = sym.split("");
s = s.split("");
let last = NaN, sum = 0;
for(let i=0; i<s.length; i++){
    sum += val[sym.indexOf(s[i])]
    //console.log(sum)
    if(sym.indexOf(s[i])>last){sum-=(2*val[last]);}
    last = sym.indexOf(s[i])
}console.log(sum)