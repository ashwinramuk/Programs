let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let noOfTestCases = parseInt(readLine());
let count=1;
while(noOfTestCases--){
    let inp_str = readLine(); //-------inp_str = "aabbccc"
    let s=inp_str[0]; //----------        s="a"
    for( let i=1;i<inp_str.length;i++){                                  // i=3              i=4            i=5           i=6            i=7...inp_str.length=7
        if(inp_str[i]===inp_str[i-1]){ // i=1 => a ===a ||| i=2 => b===a ||| i=3=> b===b ||| i=4=> c===b ||| i=5=> c===c||| i=6=> c===c
            count++                     // count = 2                     ||| count = 2                   ||| count =2   ||| count=3
        }else{
            if(count>1) s += count //                      s="a2"                        |||  s="a2b2"
            count=1;                //                     count = 1                     |||  count = 1
            s+=inp_str[i]            //                     s="a2b"                       |||  s="a2b2c"
        }
    }if(count>1) s += count;count=1;//   s="a2b2c3"
    console.log(s)                  //   "a2b2c3"
}