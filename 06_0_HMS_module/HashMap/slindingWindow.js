let arr = [1,2,4,4];
let k = 2;
let windowArr = [];
let flag = true;
let i=j=0;let count=0;
while(flag){
    let windowSet = new Set();
    for(;i<k;i++){
        if(!windowSet.has(arr[i])){
            windowSet.add(arr[i])
            count++;
        }
    }i=++j;windowArr.push(count);count=0;k=k+1;
    if(k > arr.length) flag=false;
}console.log(...windowArr)