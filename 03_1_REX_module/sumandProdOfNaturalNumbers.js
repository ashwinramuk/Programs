function sumProd(n){
    if(n===0) return
    sum += n;
    prod *= n;
    sumProd(n-1)
}

let sum = 0, prod = 1;
let n = 1;
sumProd(n);
console.log("sum: ",sum,"prod: ",prod)