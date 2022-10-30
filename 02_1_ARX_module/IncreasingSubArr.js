let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

// -------- Do NOT edit anything above this line ----------
// Use readLine() for taking input, it will read one line of from the input  and is stored in string format
// let arrSize = parseInt(readLine());
// let arr = readLine().split(" ")
// let f = 0, res= [];
// let index = [];
// arr[0] = parseInt(arr[0]);
// res[f] = [arr[0]]
// index[f] = [0]
// for (let i=1;i<arrSize;i++){
// 	arr[i] = parseInt(arr[i])
// 	if(arr[i]>arr[i-1]){
// 		res[f].push(arr[i])
//         index[f].push(i)
// 	}else{
// 		f++
// 		res[f] = [arr[i]]
//         index[f] = [i]
// 	}
// }
// let max=0;
// for (let each in res){
// 	if(res[each].length>max){
// 		max = res[each].length
//         startIdx = index[each][0]
//         endIdx = index[each][index[each].length-1]
// 	}
// }
// console.log(max, startIdx, endIdx)

//-----improvement-------
let arrSize = parseInt(readLine());
if(arrSize>0){
    let arr = readLine().split(" ")
    let max=0;
    arr[0] = parseInt(arr[0]);
    arr[arrSize] = [0,arr[0]]
    for (let i=1;i<arrSize;i++){
        function isMax(){
            if(arr[arrSize].length-2>max){
                max = arr[arrSize].length-2
                startIdx = arr[arrSize][0];
                endIdx = arr[arrSize][arr[arrSize].length-1];
            }else arr.pop();
        }
        arr[i] = parseInt(arr[i])
        if(arr[i]>arr[i-1]){
            arr[arrSize].push(arr[i])
        }else{
            arr[arrSize].push(i-1)
            isMax()
            arr[arrSize] = [i,arr[i]]
        }
        if(i===arrSize-1){
            arr[arrSize].push(i)
            isMax()
        }
    }
    //console.log(arr)
    console.log(max, startIdx, endIdx)
}