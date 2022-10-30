let price = 0;

window.onload = function () {
    document.getElementById("item-name").focus();
}

function addItemPrice() {
    if (document.getElementById("item-name").value == "" || document.getElementById("item-price").value == "") {
        return alert("Please enter value");
    }
    var table = document.getElementById("details");
    var row = table.insertRow(0);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    cell1.innerHTML = document.getElementById("item-name").value;
    cell2.innerHTML = document.getElementById("item-price").value;
    price += parseInt(document.getElementById("item-price").value);
    document.getElementById("grandtotal").innerHTML = price;
    document.getElementById("item-name").value = "";
    document.getElementById("item-price").value = "";
    document.getElementById("item-name").focus();
}
