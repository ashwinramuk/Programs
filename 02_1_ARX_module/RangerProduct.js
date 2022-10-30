let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
	idx++;
	return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
//Use readLine() for taking inplet fs = require("fs");

// let noOfTestCases = parseInt(readLine());
// while(noOfTestCases){
// 	let sizeOfTheArray = parseInt(readLine());
// 	if(sizeOfTheArray===1) {console.log(1);noOfTestCases--;continue;}
//     let nums = readLine().split(" ").map(Number)
//     let res=1;let flag = false;
//     for(let i=0;i<sizeOfTheArray;i++){
//         if(nums[i]===0) {flag=true}
//         else res *= nums[i]
//     }
//     for(let j=0;j<sizeOfTheArray;j++){
//         if(flag&&nums[j]!==0) nums[j]=0
//         else if(flag&&nums[j]===0) nums[j] = res
//         if(flag===false) nums[j] = res/nums[j]
//     }
// 	console.log(...nums)
//     noOfTestCases--;
// }
//---------2nd submission----------

// let noOfTestCases = parseInt(readLine());
// while(noOfTestCases){
// 	let sizeOfTheArray = parseInt(readLine());
// 	if(sizeOfTheArray===1) {console.log(1);noOfTestCases--;continue;}
//     let nums = readLine().split(" ").map(Number)
// 	let LR = RL = 1;
// 	let LRArr = [];let RLArr = [];let resArr = [];
//     for(let i=0,j=nums.length-1;i<nums.length;i++,j--){
// 		LR *= nums[i]
// 		RL *= nums[j]
// 		LRArr.push(LR);RLArr.push(RL)
// 		if (i===nums.length-2) {
// 			resArr[0]=RLArr[nums.length-2];
// 			resArr[nums.length-1]=LRArr[nums.length-2];
// 			if(resArr[0]===-0) resArr[0]=0;
// 			if(resArr[nums.length-1]===-0) resArr[nums.length-1]=0;
// 		}
// 		else if(i<nums.length-2){
// 			if(resArr[i+1]===undefined) resArr[i+1]=1;
// 			if(resArr[j-1]===undefined) resArr[j-1]=1;
// 			resArr[i+1]*=LRArr[i];
// 			resArr[j-1]*=RLArr[i]
// 			if(resArr[i+1]===-0) resArr[i+1]=0;
// 			if(resArr[j-1]===-0) resArr[j-1]=0;
// 		}  
// 	}
// 	console.log(...resArr)
//     noOfTestCases--;
// }

//----------new approach-----------

let noOfTestCases = parseInt(readLine());
while(noOfTestCases>0){
	let sizeOfTheArray = parseInt(readLine());
	let nums = readLine().split(" ").map(Number)
	if(sizeOfTheArray<=1) {console.log(1);noOfTestCases--;continue;}
	let LR = RL = 1;
	let resArr = Array(sizeOfTheArray).fill(1);
    for(let i=0,j=sizeOfTheArray-1;i<sizeOfTheArray;i++,j--){
		resArr[i] *= LR;
		resArr[j] *= RL
		LR *= nums[i]
		RL *= nums[j] 
	}
	console.log(...resArr)
    noOfTestCases--;
}

//-------------swetha---------------
// let testcase = parseInt(readLine());
// while(testcase>0){
// let size = parseInt(readLine());
// let nums = readLine().split(" ").map(Number);
// let product=[1];
// let temp =1;
// for(let i=0;i<size;i++){
//   product[i] = temp ;
//   temp = temp * nums[i];
// }
// temp=1;
// for(let i=size-1;i>=0;i--){
//   product[i] = product[i] * temp;
//   temp = temp * nums[i];
// }
// console.log(...product);
// testcase --;
// }
//-------------priyanka-----------------

// let noOfTestCase=parseInt(readLine());
// function converToNumber(nums)
// {
//     for(each in nums)
//     {
//         nums[each]=parseInt(nums[each]);
//     }
//     return;
// }
// function rangerProduct(arr,left,right,n)
// {
//     for(let j=0;j<n-1;j++)
//   {
//       left[j+1]=left[j]*arr[j];
//   }
//    for(let j=n-1;j>0;j--)
//   {
//       right[j-1]=right[j]*arr[j];
//   }
//   for(let j=0;j<n;j++)
//   {
//       left[j]=left[j]*right[j];
//   }
//   return left;
// }
// for(let i=0;i<noOfTestCase;i++)
// {
//     let n=parseInt(readLine());
//     let arr=readLine().split(" ");
//     converToNumber(arr);
//     let left=[];
//     left[0]=1;
//     let right=[];
//     right[n-1]=1;
//   console.log(...rangerProduct(arr,left, right, n));
// }

