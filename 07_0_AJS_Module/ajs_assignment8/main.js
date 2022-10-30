const tableElement = document.querySelector("table")
const priceElementList = tableElement.querySelectorAll("[name='prices']")
const grandTotalRowElement = document.querySelector("#grandTotal-holder")
let grandTotalCell;
function grandTotal(priceElementList){
    let total = 0;
    for(let elem of priceElementList){
        total += parseFloat(elem.value)
    }return total
}
window.addEventListener("load", ()=>{
    const grandTotalNameCell = document.createElement("td")
    grandTotalCell = document.createElement("td")
    grandTotalCell.setAttribute("data-ns-test","grandTotal")
    grandTotalRowElement.appendChild(grandTotalNameCell)
    grandTotalRowElement.appendChild(grandTotalCell)
    grandTotalNameCell.innerText ="Grand Total"
    grandTotalCell.innerText = grandTotal(priceElementList)
    grandTotalCell.classList.add("price")
})
for(let elem of priceElementList){
    elem.addEventListener("change",()=>{
        grandTotalCell.innerText = grandTotal(priceElementList)
    })
};

