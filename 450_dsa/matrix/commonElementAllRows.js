let mat = [
            [1, 2, 1, 4, 8],
            [3, 7, 8, 5, 1],
            [8, 7, 7, 3, 1],
            [8, 1, 2, 7, 9],
        ];
let matMap = new Map();
for(let i=0;i<mat[0].length;i++){
    matMap.set(mat[0][i],1)
}
for(let i=1;i<mat.length;i++){
    for(let j=0;j<mat[0].length;j++){
        if(matMap.has(mat[i][j])&&matMap.get(mat[i][j])===i){
            matMap.set(mat[i][j],i+1)
            if(i===mat.length-1){
                console.log(mat[i][j])
            }
        }
        
    }
}
