// nums=[0,0,1,1,1,2,2,3,3,4];
// let k=flag=0;
// console.log(nums)
// for(let i=0;i<nums.length;i++){
//     console.log(i);
//     for(let j=i+1;j<nums.length;j++){
//         console.log(j);
//         if (nums[i]==nums[j]){
//             nums[j]=-1;
//             k++;
//         }
//     }if(k>0){i=i+k;k=0;flag++}else{i=i+k;k=0;} 
// }console.log(nums, flag)

//---------improvement----------------------------------

let nums=[0,0,1,1,1,2,2,3,3,4];
let count=0;
let last=NaN;
for(let i=0; i<nums.length;i++){
    if(nums[i]!==last){
        nums[count]=nums[i];
        count++;
        last=nums[i];
    }
}console.log(nums, count)

