let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}

let str = readLine().split(" ");
let maxWidth = parseInt(readLine());
let lines = [];let k=0;lines[k]=[];
let vp=[];let flag = true;
for(let i=0;i<str.length;i++){
    let lineWidth = lines[k].join("").length+str[i].length+1;
    if(i===str.length-1) {lineWidth+=-1;}
    if(lineWidth<=maxWidth){
        if(lines[k].length!==0) {lines[k].push(" ");vp.push(lines[k].lastIndexOf(" "));}
        lines[k].push(str[i])
    }else{
        if(lines[k].join("").length<=maxWidth&&str[i].length<=maxWidth){
            if(vp[0]!==undefined){
                diff = maxWidth-lines[k].join("").length;
                Eqspace = parseInt(diff/vp.length);
                remspace = diff%vp.length;
                for(let index of vp){
                    for(let i=0;i<Eqspace;i++){
                        lines[k][index]+=" "
                    }if(remspace){
                        lines[k][index]+=" ";remspace--;
                    }
                } 
            }
           
        i--;
        k++;
        lines[k]=[]
        vp=[]
    }else{
        console.log("invalid");flag=false;break;
    }
    
}
    
}
//----------------Printing the justified string-------------
if(flag){
    for(let line of lines){
        console.log(line.join(""))
    }
}



