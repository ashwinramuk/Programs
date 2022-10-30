let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
let n = parseInt(readLine());
let sign =1;
if(n<0){
	sign = -1;
	n=n*sign;
}
let r=0;
// while(num!==0){
// 	i*=10
// 	num=parseInt(num/i);
// 	count++;
// }
// for(;count!==0;count--){
// 	r+=((n%k)*i)
// 	n=parseInt(n/k)
// 	i=i/10;
// }console.log((r+(n%k))*sign)

while(n>0){
	r = r*10 + n%10
	n = parseInt(n/10)
}console.log(r*sign);