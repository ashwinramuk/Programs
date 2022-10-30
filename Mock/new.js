// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// Example 1:
// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]

// Example 2:
// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

let nums = [-1,1,0,-3,3];
// let totalProd = 1;let countZero = 0;
// let prodArr=[];let zeroPos;
// for(let i=0;i<nums.length;i++){
//     if(nums[i]===0){
//         countZero++;
//         continue;
//     }
//     totalProd *= nums[i];
// }
// if(countZero===0){
//     for(let i=0;i<nums.length;i++){
//         prodArr[i] = totalProd/nums[i];
//     }
// }else if(countZero===1){
//     for(let i=0;i<nums.length;i++){
//         if(nums[i]===0){prodArr[i]=totalProd;continue;}
//         prodArr[i] = 0;
//     }
// }else{
//     for(let i=0;i<nums.length;i++){
//         prodArr[i]=0;
//     }
// }
// console.log(prodArr)\
let ltrArr=[];let rtlArr=[];let prodArr=[]
ltrArr[0] = 1; rtlArr[nums.length-1] = 1;              //ltrArr = [1,]   rtlArr = [,,,1]
for(let i=1,j=nums.length-2;i<nums.length;i++,j--){    //
    ltrArr[i] =  nums[i-1] * ltrArr[i-1];              //ltrArr = [1,2] rtlArr = [,,4,1]
    rtlArr[j] = nums[j+1] * rtlArr[j+1];
}
for(let i=0;i<nums.length;i++){
    prodArr[i] = ltrArr[i]*rtlArr[i];
    if(prodArr[i]===-0){prodArr[i]=0;}
}console.log(prodArr)

