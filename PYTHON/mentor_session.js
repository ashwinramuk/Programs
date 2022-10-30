let r = 4, c = 4
let matrix = [[1, 2, 3, 4],
           [5, 6, 7, 8],
           [9, 10, 11, 12],
           [13, 14, 15,16]]

function spirallyTraverse(matrix, r, c)
{
        // code here
        let spiralElements = []
        let i=j=m=n=0;let temp;let totalElem = r*c;
        while(totalElem--){
            if(j<c.length-1-n && i===m) {temp=matrix[i][j];j++;} else{m++};
            if(j===c.length-1-n&&i<r.length-m) {temp=matrix[i][j];i++;} else{c--};
            if(i===r.length-m&&j>=n) {temp = matrix[i][j];j--} else{r--};
            if(j===n&&i>=0){temp=matrix[i][j];i--}else {n++};
            spiralElements.push(temp);
        }return spiralElements
        
}
console.log(spirallyTraverse(matrix,r,c))