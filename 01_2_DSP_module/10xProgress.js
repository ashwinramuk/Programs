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
class Student{
	constructor(name){
		this.name = name;
		this.marks = [];
        this.totalMarks = 0;
	}
	enter_score(marks){
		this.marks.push(marks);
		this.totalMarks += marks
	}
	get_average_score(){
		return Math.round(this.totalMarks/this.marks.length)
	}
	get_test_score(test_number){
		return this.marks[test_number-1]===undefined?"NA":this.marks[test_number-1]
	}
}
let student = new Student(readLine());
let noOfTests = parseInt(readLine());
while(noOfTests--){
	student.enter_score(parseInt(readLine()));
}
let noOfQueries = parseInt(readLine());
while(noOfQueries--){
	let result = ''
	let queryString = readLine();
	if(queryString==="average"){
		result = `${student.name} average score: ${student.get_average_score()}`
	}else{
		let testNo = parseInt(readLine());
		result = `${student.name} test ${testNo} marks: ${student.get_test_score(testNo)}`
	}console.log(result)
}
