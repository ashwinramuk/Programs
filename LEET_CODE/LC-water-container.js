let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}
//---------------------------code starts here-------------------------------
let height = readLine().split(",");

let a=count=0;
let s_h=l_h=l_a=l_w=0;
let check=same=diff=0;

let len = height.length
for(let i=0;i<len;i++){
    if(height[i]>l_h){
        for(let j=len-1;j>i;j--){
            if(height[j]>l_h){
                if(parseInt(height[i])<parseInt(height[j])){h=parseInt(height[i]);s_h ='i'}else{h=parseInt(height[j]);s_h='j'}
                a = h*(j-i);
                check++
                if(a<l_a){a=l_a;count++;same++}else{l_a=a;count--;diff++}
                if(s_h==='i'){l_h=h;break;}else{l_h = h;l_w = (j-i);}
            }else{continue;}
        }
    }else{continue;}

}
console.log(a, count, check, same, diff, height.length)

