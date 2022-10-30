const divide = document.querySelector("#divide")
const multiply = document.querySelector("#multiply")
const sub = document.querySelector("#minus")
const add = document.querySelector("#plus")
const numList = document.querySelectorAll(".numbers")
const display = document.querySelector("#input")
const operatorList = document.querySelectorAll(".operator")
const answer = document.querySelector("#ans")
const clearBtn = document.querySelector("#clr")
for(let num of numList){
    num.addEventListener("click", (e)=>{
        display.value += e.target.value
    })
}
for(let operator of operatorList){
    operator.addEventListener("click", (e)=>{
        display.value += e.target.value
    })
}
answer.addEventListener("click",(e)=>{
    display.value = eval(display.value)
})
clearBtn.addEventListener("click",(e)=>{
    display.value = ""
})