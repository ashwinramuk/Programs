let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// let n = readLine().split("");
// console.log(n);
// let sum = parseInt(n[0]);
// let product = parseInt(n[0]);
// for(let i=1;i < n.length;i++){
// 	sum += parseInt(n[i]);
// 	product *= parseInt(n[i]);
// }
// console.log(product-sum);

let n= parseInt(readLine());
let sum = 0, prod=1, r=0;
if(n===0){
    r=0;
}else{
    while (n>0){
        let num = n%10;
        sum += num;
        prod *= num;
        n=parseInt(n/10);
    }r=prod-sum;
}
console.log(r);

