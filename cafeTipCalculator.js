var billAmount = document.querySelector('#billAmount');
var calculateBtn = document.querySelector('#calcBtn');
var tipAmount = document.querySelector('#tipAmount--perPerson');
var totalAmount = document.querySelector('#totalAmount--perPerson');
var resetBtn = document.querySelector('#resetBtn');



function calculateTipAmount() {
    let typeOfTips = document.querySelector("input[name='type_tip']:checked").value;
    let tipAmountValue = parseFloat(billAmount.value);
    let sum;
    let valueAmount;
    let numberOfPerson = document.querySelector("select").value;
    let numberOfPersonToNumber = parseFloat(numberOfPerson);
    if (numberOfPersonToNumber === 0) {
        alert('Erorr');
    } else {
    if (typeOfTips == 0){
        valueAmount = 0;
         sum = tipAmountValue / numberOfPersonToNumber;
    } else if (typeOfTips == 10){
        valueAmount = (tipAmountValue * (10/100))/numberOfPersonToNumber;
         sum = (tipAmountValue +( tipAmountValue * (10 / 100))/numberOfPersonToNumber);
    } else if (typeOfTips == 15){
        valueAmount = (tipAmountValue * (15/100))/numberOfPersonToNumber;
         sum = (tipAmountValue +( tipAmountValue * (15 / 100)))/numberOfPersonToNumber;
    } else if (typeOfTips == 20){
        valueAmount = (tipAmountValue * (20/100))/numberOfPersonToNumber;
         sum = (tipAmountValue +( tipAmountValue * (20 / 100)))/numberOfPersonToNumber;
    } else if (typeOfTips == 30){
        valueAmount = (tipAmountValue * (30/100))/numberOfPersonToNumber;
       sum = (tipAmountValue +( tipAmountValue * (30 / 100)))/numberOfPersonToNumber;
    } else {
        console.log('errror');
    }
}
    tipAmount.textContent = valueAmount.toFixed(2);
    totalAmount.textContent = sum.toFixed(2);
    return;
}

//event listener for calculate button
calculateBtn.addEventListener('click', calculateTipAmount);

//event listener for reset btn
resetBtn.addEventListener('click', () => {
    billAmount.value = '';
    let selectedRadio = document.querySelector("input[name='type_tip']:checked");
    if (selectedRadio) {
        selectedRadio.checked = false;
    }
    document.querySelector('select').value = "0";
    tipAmount.textContent = '';
    totalAmount.textContent = '';
});


