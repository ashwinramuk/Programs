let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n = parseInt(readLine());
let arr=[];
for(let i=0;i<n;i++){
    arr.push(parseInt(readLine()))
}//console.log(arr)                     //---arr = [-1,4,2,3,1]
let m = parseInt(readLine());
while(m){                              //--------1
    let mid = parseInt(n/2)
    let i=0
    for(;i<mid;i++){ //--------5/2=2; 0                                 1            2
        arr[i] += arr[mid+i]           //-------arr[0] = arr[0]+2         arr[1]+=3
    }//console.log(arr);                //-------arr=[1,4,2,3,1]        arr=[1,7,2,3,1]
    arr.slice(mid,i)
    m--
    n=arr.length                                    //--------m=0
}//console.log(arr)                 
console.log(arr.length)
for(let each of arr){
    console.log(each)
}