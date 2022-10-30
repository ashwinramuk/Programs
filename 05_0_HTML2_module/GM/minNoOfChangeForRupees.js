let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
function minChangeForRupees(V){            // denomination available 1, 2, 5, 10, 20, 50, 100, 500, 1000
    let count=0;
    changesArr=[1000,500,100,50,20,10,5,2,1];
    for(let i=0;i<changesArr.length;i++){
        let temp=parseInt(V/changesArr[i])
        if(temp) {count+=temp;V=V%changesArr[i]}
    }return count
}
console.log(minChangeForRupees(parseInt(readLine())));
