// let totalPrice = 0;

const inputBox = document.querySelectorAll('.prices');
// console.log(inputBox.length)
for(let i=0; i<inputBox.length; i++) {
    inputBox[i].addEventListener('change', SumOfAll) 
    // console.log(inputBox[i])
}

let tablebody = document.querySelector('table');
    let totalRow = document.createElement('tr');
    let textBox = document.createElement('td');
    textBox.append('Grand Total');
    let sumBox = document.createElement('td');

    totalRow.appendChild(textBox);
    totalRow.appendChild(sumBox)
    tablebody.appendChild(totalRow);

function SumOfAll() {
    let totalPrice = 0;
    for(let i=0; i<inputBox.length; i++) {
        totalPrice += Number(inputBox[i].value)
    }

    sumBox.innerHTML = totalPrice;

    
}