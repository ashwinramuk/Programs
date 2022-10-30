let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');
function readLine() {
    idx++;
    return data[idx - 1].trim();
}
let n=parseInt(readLine());
let rope=[];
for(let i=0;i<n;i++)
{
    rope.push(parseInt(readLine()));
}
let numOfFolds=parseInt(readLine());
let r;
while(numOfFolds)
{r=Math.ceil(n/2);
for(let i=0,j=n-1;i<r;i++,j--)
{
    if(i<j)
  {rope[i]=rope[i]+rope[j];}
}
numOfFolds--;
n=r;
}
console.log(r);
for(let i=0;i<r;i++)
 console.log(rope[i]);