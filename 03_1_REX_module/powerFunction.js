function powerFunction(x,n){
    if(n==0) return 1
    return x*powerFunction(x,n-1)
}
console.log(powerFunction(5,3))