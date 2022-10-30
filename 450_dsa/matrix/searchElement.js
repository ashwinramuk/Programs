let matrix = [[1,3,5,7],[10,11,16,20],[23,30,34,60]]
let target = 3
let rowIdx;let firstIdx=0;
for(let i=0; i<matrix.length;i++){
    let lastIdx = matrix[i].length-1
    if(target<=matrix[i][lastIdx]) {rowIdx = i;break;}
}let lastIdx = matrix[rowIdx].length
while(firstIdx<=lastIdx){
    let midIdx = parseInt((firstIdx+lastIdx)/2)
    if(target==matrix[rowIdx][midIdx]){console.log(true);break}
    else if(target<matrix[rowIdx][midIdx]){lastIdx=midIdx-1;continue}
    else{firstIdx = midIdx+1;continue}
}console.log(false)