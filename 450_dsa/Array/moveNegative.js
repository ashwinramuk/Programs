let n=8
arr = [-5, 7, -3, -4, 9, 10, -1, 11]
let i=0;
let positiveArr=[];let negativeArr=[]
while(n--){
    if(arr[i]>=0){
        positiveArr.push(arr[i]);
    }else{
        negativeArr.push(arr[i]);
    }i++;
}arr=[]
arr.push(...positiveArr,...negativeArr)
console.log(arr)