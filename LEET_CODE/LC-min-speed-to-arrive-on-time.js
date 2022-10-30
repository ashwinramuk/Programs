let dist = [6,10,5,1,8,9,2];
let hour = 34.0;
let last, last_l;
let l = 10**9,r=1;let mid;
if (dist.length-1>hour) {console.log(-1);return -1}
else {
    while(r<=l){
        mid = Math.ceil((l+r)/2)
        console.log(r,l,mid)
        let sum=i=0;
        for(;i<dist.length-1;i++){
            sum += Math.ceil(dist[i]/mid)
        }sum += dist[i]/mid;
        console.log(sum)
        if(sum>hour) {console.log("last mid: ",last);return last;}
        if(sum>hour) {r=mid+1;console.log("r: ",r);}
        else {l=mid-1;console.log("l,mid:",l,mid);last=mid;if(l===last_l) return mid; last_l=l;}
    }console.log(last)
}