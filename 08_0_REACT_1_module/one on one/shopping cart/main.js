const itemName = document.querySelector("#item-name-input")
const itemPrice = document.querySelector("#item-price-input")
const addBtn = document.querySelector("#add")
const template = `<tr><td>${itemName.value}</td><td>${itemPrice.value}</td></tr>`
const table = document.querySelector("#table")
const grandtotal = document.querySelector("#grandTotal")
let total=0;
addBtn.addEventListener("click",(e)=>{
    const template = `<tr><td data-ns-test="item-name">${itemName.value}</td><td data-ns-test="item-price">${itemPrice.value}</td></tr>`
    table.innerHTML += template
    total += parseFloat(itemPrice.value)
    grandtotal.innerText=total
    itemName.value=""
    itemPrice.value=""
})

