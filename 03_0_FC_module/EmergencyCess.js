let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1].trim();
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format

// function calculateTotalFund(salaries, peopleCount){
//     let totalCessFund = 0, cessPercent = 7/100;
// 	for(let i=0; i<1/*peopleCount*/; i++){
//         totalCessFund += Math.ceil(7*salaries[i]/100)
//         console.log(
//             " a, 100*(7/100)===7, 100*(7/100):",100,",",100*(7/100)===7,100*(7/100),"\n",
//             "7*a/100: ",7*salaries[i]/100,"\n",
//             "a*7/100: ",salaries[i]*7/100,"\n", 
//             "7/100*a: ",7/100*salaries[i],"\n",
//             "(7/100)*a: ",(7/100)*salaries[i],"\n", 
//             "a*(7/100): ",salaries[i]*(7/100),"\n",
//             )
// 	}return totalCessFund
//     // let totalFund=0;
//     // for(let i=0;i<peopleCount;i++){
//     // totalFund+=Math.ceil(salaries[i]*7/100);
//     // console.log(totalFund)
//     // }return totalFund;
// }

function calculateTotalFund(salaries, peopleCount){
    let totalCess = 0, cessPercent = 7;
	for(let i=0; i<peopleCount; i++){
        totalCess += Math.ceil(cessPercent*salaries[i]/100)
	}return totalCess
}


function ConvertToNumber(list){
    for(let each in list){
        list[each]=Number(list[each])
    }
}

let peopleCount = parseInt(readLine());
let salaries = readLine().split(" ");
ConvertToNumber(salaries);
let totalFund = calculateTotalFund(salaries, peopleCount);
console.log(totalFund);