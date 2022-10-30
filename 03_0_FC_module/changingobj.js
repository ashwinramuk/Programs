let obj = {
    name:"hai",
    age:22,
    roll:23883
}
console.log(Object.keys(obj))
for (let each of obj){
    if(typeof(obj[each])==='string') delete obj[each]
}
console.log(obj)