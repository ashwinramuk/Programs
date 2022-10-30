let totalPrice = 0
function addItemToCart(){
    var itemName = document.getElementById("item-name-input")
    var itemPrice = document.getElementById("item-price-input")
    if(!itemName.value||!itemPrice.value) return alert("Please enter required input")
    else if(itemPrice.value<0) return alert("Please enter valid price")
    totalPrice += parseInt(itemPrice.value)
    var table = document.getElementById("cartTable")
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = itemName.value;
    cell2.innerHTML = itemPrice.value;
    itemName.value = ""
    itemPrice.value = ""
    document.getElementById("grandTotal").innerText= totalPrice
}