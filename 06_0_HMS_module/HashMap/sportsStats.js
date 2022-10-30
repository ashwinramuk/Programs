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
let noOfEntries = parseInt(readLine());
let entriesMap = new Map();
for(let i=0;i<noOfEntries;i++){
	let [name,favSport] = readLine().split(" ");
	if(!entriesMap.has(name)) entriesMap.set(name,favSport);
}
let favSportMap = new Map();
for(let sport of entriesMap.values()){
	if(!favSportMap.has(sport)) favSportMap.set(sport,1)
	else favSportMap.set(sport,favSportMap.get(sport)+1)
}
let ansArr = [];let max = -1/0;
for(let val of favSportMap.values()){
	if(val>max) {max=val;}
}
for(let [key,val] of favSportMap.entries()){
	if(val===max ){
		ansArr.push(key)
	}
}
console.log(ansArr.sort()[0]);
console.log(favSportMap.get("football")?favSportMap.get("football"):0);
