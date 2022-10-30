let size = 3
let mat = [[1,2,3],[4,5,6],[7,8,9]]
// while(size--){
//     mat.push(readLine().split(" ").map(Number))
// }
for(let i=0;i<parseInt(size/2);i++){

    // mat[0][0] => mat[0][size-1]
    // mat[0][size-1] => mat[size-1][size-1]
    // mat[size-1][size-1] => mat[size-1][0]
    // mat[size-1][0] => mat[0][0]
    
    // mat[0][0+1] => mat[0+1][size-1]
    // mat[0+1][size-1] => mat[size-1][size-1-1]
    // mat[size-1][size-1-1] => mat[size-1-1][0]
    // mat[size-1-1][0] => mat[0][0+1]
    
    // let s
    // mat[0][tl], mat[tr][size-1],mat[size-1][size-1-br],mat[size-1-bl][0]
    // let tl=tr=br=bl=j;
    for(let j=0;j<size-1;j++){
        let temp = mat[j][size-1-i]
        mat[j][size-1-i]=mat[i][j]
        mat[i][j]=mat[size-1-j][i]
        mat[size-1-j][i]=mat[size-1-i][size-1-j]
        mat[size-1-i][size-1-j]=temp
        
    }
    console.log(mat)
    
}