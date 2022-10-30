let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
num = parseInt(readLine());
// num=45
while (true){
    let n = ''+num;
    let num_list = n.split('');
    console.log(num_list);
    let add = 0;
    for(let i=0; i<num_list.length;i++){
        add += parseInt(num_list[i]);
    }
    if(add>10){
        num = add;
        console.log(num)
    }else{
        console.log(add)
        break
    }
}
// shortest runtime
// return num != 0 ? num - (9)*Math.floor((num-1)/(9)) : 0

// shortest memory
// if(num == 0) return 0;
// else if(num % 9 == 0) return 9;
// else return num % 9;

// if(num === 0) return num;
//     const res = num < 9 ? num : num % 9;
//     return res === 0 ? 9 : res;
