// let a = 900
// function gp() {
//     let b=90
//     let c=99
//     function p(){
//         let c=88;
//         function child(){
//             return a+b+c;
//         }b=child()
//         return a+b+c
//     }p();
//     return a+b-c
// }
// console.log(gp())

// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');
// function readLine() {
//     idx++;
//     return data[idx - 1].trim();
// }

// function User(n,g,r,b,h){
//     this.name = n
//     this.gender = g
//     this.rollNumber = r
//     this.branch = b
//     this.hostelBlock = h
//     this.printDetails = function (){
//         console.log(this.gender, this.hostelBlock)
//     }
// }
// let user = [];
// let i=0
// for(; i<3;i++){
//     let inp = readLine().split(" ")
//     names = inp[0]
//     gender = inp[1]
//     roll = inp[2]
//     branch = inp[3]
//     hostel = inp[4]
//     user[i] = new User(names,gender,roll,branch,hostel)
// }//console.log(user)

// let queryRNo = readLine();
// for(student of user){
//     if(student.rollNumber===queryRNo){
//         student.printDetails()
//     }
// }//console.log(queryRNo)

// function BPRecord (s, d){
//     this.systolic = s
//     this.diastolic = d
//     this.generateReport = function (){
//         console.log("BP value: ",this.systolic,"/",this.diastolic)
//         if(this.systolic>140||this.diastolic>90){
//             console.log("Diagnosis: High BP")
//         }else if(this.systolic<90||this.diastolic<60){
//             console.log("Diagnosis: Low BP")
//         }else {console.log("Diagnosis: Normal BP")}
//     }
// }

// let report = new BPRecord(141, 90)
// report.generateReport()

// let user = [];
// let i=0
// for(; i<3;i++){
//     let inp = readLine().split(" ")
//     names = inp[0]
//     gender = inp[1]
//     roll = inp[2]
//     branch = inp[3]
//     hostel = inp[4]
//     user[i] = new User(names,gender,roll,branch,hostel)
// }//console.log(user)

// let queryRNo = readLine();
// for(student of user){
//     if(student.rollNumber===queryRNo){
//         student.printDetails()
//     }
// }//console.log(queryRNo)

function CreditCardUser (p, b, ph){
    this.period = p
    this.balance = b
    this.phoneNumber = ph
    this.debitAmount = function (amount){
        console.log()
        if(this.period<365){
            if(amount<=this.balance+100000){
                this.balance-=amount
            console.log("transaction success")}
            else console.log("Limit Exceeded")
        }else if(this.period>365||this.period<365*5){
            if(amount<=this.balance+500000){
                this.balance-=amount
            console.log("transaction success")}
            else console.log("Limit Exceeded")
        }else {
            if(amount<=this.balance+1000000){
                this.balance-=amount
            console.log("transaction success")}
            else console.log("Limit Exceeded")
        }
    }
}

let Ashwin = new CreditCardUser(200, 200000, 9629945467)
console.log(Ashwin.balance)
Ashwin.debitAmount(500000)
console.log(Ashwin.balance)


