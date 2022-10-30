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
let memberNamesArr = readLine().split(" ");
let happinessArr = readLine().split(" ").map(Number);
let total = 0;
for(let i=0;i<memberNamesArr.length;i++){
	if(memberNamesArr[i]==="boss"||memberNamesArr[i]==="Boss"){happinessArr[i]*=2;}
	total += happinessArr[i];
}
let happinessRating = total/happinessArr.length;
if(happinessRating<=5) {console.log("They fired me");}
else {console.log("I still have a job")}

