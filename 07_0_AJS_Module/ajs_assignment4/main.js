let totalPrice = 0
document.querySelector("button").addEventListener("click",addItemToCart)
function addItemToCart(){
    var itemName = document.querySelector("#item-name-input")
    var itemPrice = document.querySelector("#item-price-input")
    if(!itemName.value||!itemPrice.value) return alert("Please enter required input")
    else if(itemPrice.value<0) return alert("Please enter valid price")
    totalPrice += parseInt(itemPrice.value)
    const tableLabel = document.querySelectorAll("th")
    tableLabel[0].innerText = tableLabel[0].dataset.nsTest
    tableLabel[1].innerText = tableLabel[1].getAttribute("data-ns-test")
    var table = document.querySelector("#cartTable")
    const row = document.createElement("tr")
    const cell1 = document.createElement("td")
    const cell2 = document.createElement("td")
    table.appendChild(row)
    row.appendChild(cell1)
    row.appendChild(cell2)
    cell1.innerText = itemName.value;
    cell2.innerText = itemPrice.value;
    itemName.value = ""
    itemPrice.value = ""
    document.querySelector('[data-ns-test="grandTotal"]').innerText= totalPrice
}