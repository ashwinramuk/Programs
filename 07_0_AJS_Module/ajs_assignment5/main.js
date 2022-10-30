const disp0 = document.querySelector("#input0")
const disp = document.querySelector("#input")
const numArr = document.querySelectorAll(".grid-btn-num")
const clear = document.querySelector("#clr")
const clearEntry = document.querySelector("#clr-entry")
const backspace = document.querySelector("#backspace")
const add = document.querySelector("#plus")
const sub = document.querySelector("#minus")
const mult = document.querySelector("#multiply")
const div = document.querySelector("#divide")
const ans = document.querySelector("#ans")
const dot = document.querySelector("#dot")
const negation = document.querySelector("#negative")
let number1,number2;
let flag = false;
let flag1=true;
let operator,temp;

function display(){
    // if(flag) {disp.value = 0;}
    if(disp.value.length===1&&disp.value==0) disp.value = event.target.value;
    else disp.value += event.target.value//.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');//.toLocaleString('en-IN')
}
clear.addEventListener("click",function(){disp.value = 0;disp0.value="";number1=undefined})
clearEntry.addEventListener("click",function(){disp.value = 0;disp0.value="";number1=0})
backspace.addEventListener("click",function(){if(disp.value.length!==1){let arr = disp.value.split("");arr.pop();disp.value = parseFloat(arr.join(""))}else{disp.value=0}})
dot.addEventListener("click",function(){disp.value += "."})
negation.addEventListener("click",function(){disp.value = parseFloat(disp.value)*-1;})
function resultFunc(){
    if(!flag1){
        flag1=true
        disp0.value += disp.value+"=";
        [number1,number2] = disp0.value.split(operator)
        // number1 = disp.value
        number2 = number2.split("=")[0]
        disp.value = eval(`${number1} ${operator} ${number2}`)
    }else{
        [number1,number2] = disp0.value.split(operator)
        number1 = disp.value
        number2 = number2.split("=")[0]
        disp0.value = disp.value+operator+number2+"="
        disp.value = eval(`${number1} ${operator} ${number2}`)
    }
}
ans.addEventListener("click",resultFunc)
add.addEventListener("click",function(){
    if(!flag1){resultFunc();}
    disp0.value = disp.value+"+";
    disp.value = 0
    flag1 = false
    operator = "+"
})
sub.addEventListener("click",function(){
    if(!flag1){resultFunc();}
    disp0.value = disp.value+"-";
    disp.value = 0
    flag1 = false
    operator = "-"
})
mult.addEventListener("click",function(){
    if(!flag1){resultFunc();}
    disp0.value = disp.value+"*";
    disp.value = 0
    flag1 = false
    operator = "*"
})
div.addEventListener("click",function(){
    if(!flag1){resultFunc();}
    disp0.value = disp.value+"/";
    disp.value = 0
    flag1 = false
    operator = "/"
})
