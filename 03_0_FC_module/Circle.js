// let fs = require("fs");
// let data = fs.readFileSync(0, 'utf-8');
// let idx = 0;
// data = data.split('\n');

// function readLine() {
//   idx++;
//   return data[idx - 1];
// }

// -------- Do NOT edit anything above this line ----------
class Circle{
	constructor(radius){
		this.radius = radius
	}
	getArea(){
        let area = 0
		if (this.radius>0) {area = Math.ceil((this.radius**2)*3.14)}
		return area
	}
	getCircumference(){
        let circumference = 0
		if (this.radius>0) {circumference = Math.ceil(2*3.14*this.radius)}
		return circumference
	}
}


// Your class should be named `Circle`.
// Method to get area should be named `getArea`
// Method to get circumference should be named `getCircumference`.
// Your class should take radius `r` as input when creating an object.




// -------- Do NOT edit anything below this line ----------

let oneCircle = new Circle(0);
console.log(oneCircle.getArea());
console.log(oneCircle.getCircumference());