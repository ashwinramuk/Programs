N=4
Mat=[[10,20,30,40],
[15,25,35,45],
[27,29,37,48],
[32,33,39,50]]
let numMat = []
for(let i = 0;i<N;i++){
    for(let j=0;j<N;j++){
        numMat.push(Mat[i][j])
    }
}numMat.sort(function(a,b){return a-b})
let j=-1;
for(let i=0;i<numMat.length;i++){
    let k = i%N
    if(k===0) j++
    Mat[j][k]=numMat[i]
}console.log(Mat)