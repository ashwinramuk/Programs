//console.log("Hello world")

let fs = require("fs");
const { parse } = require("path");
let data = fs.readFileSync("PYTHON\\L1\\input.txt", 'utf-8');
let idx = 0;
data = data.split('\n');

function readLine() {
    idx++;
    return data[idx - 1].trim();
}
// let firstLine = readLine();
// let secondLine = readLine()
// console.log(firstLine, secondLine)

// let name = readLine();
// console.log("Hello", name)

// let x = readLine();
// console.log(x, typeof(x))

// x= parseInt(x)
// console.log(x, typeof(x))

// console.log(typeof(23),typeof(12.4))

// let number = "12.5"
// console.log(parseInt(number))
//"12.45" => 12.45 => 12


console.log(parseInt(-1.9))
