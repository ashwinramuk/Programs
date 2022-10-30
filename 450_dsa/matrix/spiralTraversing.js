let matrix = [[1, 2, 3, 4],[5, 6, 7, 8],[9, 10, 11, 12],[13, 14, 15,16]]
let r=4,c=4

let spiralElements = []
let i=j=m=n=count=0;let totalElem = r*c;let flag = true
while(count<=totalElem&&flag){
    console.log(count<=totalElem,flag)
    for(;j<c-n;j++){
        console.log("First for")
        if(count===totalElem){flag = false;break;}
        spiralElements.push(matrix[i][j])
        count++;
    }j--;i++;
    for(;i<(r-m);i++){
        console.log("Second for")
        if(count===totalElem){flag = false;break;}
        spiralElements.push(matrix[i][j])
        count++
    }i--;j--;
    for(;j>=n;j--){
        console.log("Third for")
        if(count===totalElem){break;}
        spiralElements.push(matrix[i][j])
        count++
    }j++;i--;
    for(;i>m;i--){
        console.log("Fourth for")
        if(count===totalElem){break;}
        spiralElements.push(matrix[i][j])
        count++
    }if(count===totalElem){break}
    i++;j++;m++;n++;
}console.log(spiralElements)
        