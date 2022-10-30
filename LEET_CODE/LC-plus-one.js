digits = [6,1,4,5,3,9,0,1,9,5,1,8,6,7,0,5,5,4,3]
let len = digits.length
console.log(len)
// let r=1;
// place=10
// for(let i=digits.length-1; i>-1; i--){
//     console.log(r)
//     r += (digits[i]*place);
//     console.log(r,digits[i],place)
//     place=place*10;        
// }//return (r).toString().split("");
// console.log((r).toString().split(""))
let i = 1;
while(true){
    if (digits[len-i]<9){
        digits[len-i] += 1;
        break;
    }else{
        digits[len-i] = 0;
        if((len-i)===0){digits.unshift(1);break;}
        i++;        
    }
}console.log(digits)