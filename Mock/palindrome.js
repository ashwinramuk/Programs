let str = "111000";
let countOne=countZero=countMismatch=0;
for(let i=0;i<str.length;i++){
    if(str[i]==="0"){
        countZero++;
    }else{
        countOne++;
    }
}
if(countZero%2==1&&countOne%2==1){
    console.log(-1);
}else{
    for(let i=0,j=str.length-1;i<j;i++,j--){
        if(str[i]!==str[j]){
            countMismatch++;
        }
    }console.log(Math.floor((countMismatch+1)/2))
    // }if(countMismatch%2){
    //     console.log((countMismatch+1)/2)
    // }else{
    //     console.log(countMismatch/2)
    // }
}






