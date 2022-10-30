let fs = require("fs");
let data = fs.readFileSync(0, 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
  idx++;
  return data[idx - 1];
}

class TravelConcession{
    constructor(a, g){
        this.age = a
        this.gender = g
        console.log(this.gender==="F")
    }
    isEligible(){
        if(this.age > 60 && this.gender == "M") {console.log("Eligible")}
        else if(this.age > 58 && this.gender=="F") {console.log("Eligible")}
        else {console.log("Not Eligible")}
    }
}

let noOfTestCases = parseInt(readLine());
while(noOfTestCases){
    let input = readLine().split(" ")
    let age = parseInt(input[0])
    let gender = input[1]
    let passenger = new TravelConcession(age, gender)
    passenger.isEligible()
    noOfTestCases--;
}
