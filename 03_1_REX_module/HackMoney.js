let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// function HackMoney(target){
//     // console.log(count,twoCount,target)
// 	if(target>0){
//         if(target===1&&twoCount<=count){
//             // console.log("inside if");
//             result='Yes';
//             return
//         }else {
//             if(target%10===0){
//                 count++
//                 HackMoney(target/10)
//             }else{
//                 // console.log("inside else", target&target-1)
//                 if(target&target-1){
//                     return "No"
//                 }else{
//                     // console.log("inside 2nd else")
//                     twoCount++
//                     HackMoney(target/2)
//                 }
//             }
//         }
//     }else return "No"
// 	// return target>0?target===1?"Yes":target%10===0?HackMoney(target/10):target%2===0?HackMoney(target/2):"No":"No"
// }
//------swetha's logic--------
function HackMoney(target, initialMoney=1){
    return target===initialMoney?true:initialMoney>target?false:HackMoney(target,initialMoney*20)||HackMoney(target,initialMoney*10)
}
//------------------------------
let noOfTestCases=parseInt(readLine());
let count,twoCount;
let result='';
while(noOfTestCases--){
	//count=0;
	//twoCount=0;
    //result='No';
    // HackMoney(parseInt(readLine()))
	// console.log(result);
    console.log(HackMoney(parseInt(readLine()))?"Yes":"No")
}

//---------swetha's----------------
// function hack(targetMoney, initial_money) {

//     if (targetMoney == initial_money) {
//         console.log("inside i==t")
//       return true;
//     }
//     if (initial_money > targetMoney) {
//         console.log("inside i>t, initial money",initial_money)
//       return false;
//     }else console.log("inside i<t, initial money", initial_money)
//     if (hack(targetMoney, initial_money * 10)) {
//         console.log("inside first if 10")
//       return true;
//     }else console.log("inside first if's else 10, initial money", initial_money)
//     if (hack(targetMoney, initial_money * 20)) {
//         console.log("inside second if 20",initial_money)
//       return true;
//     }
//     else {
//         console.log("inside second if's else 20")
//       return false;
//     }
//   }
//   let size = parseInt(readLine());
//   for (let i = 0; i < size; i++) {
//     let money = parseInt(readLine());
//     if (hack(money, 1)) {
//       console.log("Yes");
//     } else {
//       console.log("No");
//     }
//   }