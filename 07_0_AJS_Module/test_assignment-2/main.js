const maxSum = document.querySelector("#max-sum")
const totalSum = document.querySelector("#sum")
const rangeA = document.querySelector("#range-a-holder")
const rangeAVal = document.querySelector("#range-a-value")
const rangeB = document.querySelector("#range-b-holder")
const rangeBVal = document.querySelector("#range-b-value")
const rangeASlide = document.querySelector("#range-a-slider")
const rangeBSlide = document.querySelector("#range-b-slider")
maxSum.addEventListener("change",()=>{
    rangeAVal.innerText = parseInt(0)
    rangeBVal.innerText = parseInt(event.target.value)
    rangeASlide.value=rangeAVal.innerText
    rangeASlide.max=rangeAVal.innerText
    rangeBSlide.value=rangeBVal.innerText
    totalSumText(parseInt(rangeASlide.value),parseInt(rangeBSlide.value))
    rangeBSlide.max=rangeBVal.innerText
})
rangeASlide.addEventListener("change",(event) =>{
    rangeBSlide.setAttribute("max",parseInt(maxSum.value)-parseInt(event.target.value))
    rangeAVal.innerText = parseInt(event.target.value)
    totalSumText(parseInt(rangeASlide.value),parseInt(rangeBSlide.value))
})
rangeBSlide.addEventListener("change",(event) =>{
    rangeASlide.setAttribute("max",parseInt(maxSum.value)-parseInt(event.target.value))
    rangeBVal.innerText = parseInt(event.target.value)
    totalSumText(parseInt(rangeASlide.value),parseInt(rangeBSlide.value))
})
function totalSumText (a,b){
    totalSum.innerText = a+b;
}

