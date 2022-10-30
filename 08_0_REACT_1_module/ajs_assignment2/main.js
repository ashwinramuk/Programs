const startbtn = document.querySelector("#start")
const pausebtn = document.querySelector("#pause")
const stopbtn = document.querySelector("#stop")
const timer = document.querySelector("#time")
let timerId;
startbtn.addEventListener("click",()=>{
    pausebtn.disabled = false;
    stopbtn.disabled = false;
    startbtn.disabled = true;
    timerId = setInterval(timerdisplay,10)

})
pausebtn.addEventListener("click",(event)=>{
    let txt = event.target.innerText
    event.target.innerText= txt==="pause"?"continue":"pause"
    if(txt==="pause")clearInterval(timerId)
    else timerId=setInterval(timerdisplay,10)
})
stopbtn.addEventListener("click",()=>{
    timer.innerText="00:00:00"
    startbtn.disabled=false
    pausebtn.disabled=true
    stopbtn.disabled=true
    pausebtn.innerText = "pause"
    clearInterval(timerId)
    i=0;
})
let i=3580;
function timerdisplay(){
    i+=0.01;
    let sec = Math.floor(i%60)
    if(sec<10) sec="0"+sec
    let min = Math.floor(i/60)%60
    if(min<10) min="0"+min
    let hr = Math.floor(i/(60*60))
    if(hr<10) hr ="0"+hr
    timer.innerText=`${hr}:${min}:${sec}`
}