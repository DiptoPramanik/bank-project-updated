//console.log('js file added');
function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    //console.log(depositAmountText);
    const Amountvalue = parseFloat(inputAmountText);
    //clear input field 
    inputField.value = '';
    return Amountvalue;
}

function updateTotalField(totalFieldId, amount) {
    //debugger;
    const totalElement = document.getElementById(totalFieldId);
    const TotalText = totalElement.innerText;
    //console.log(depositTotalText);
    const previousTotal = parseFloat(TotalText);
    totalElement.innerText = previousTotal + amount;
}
function getCurrentBalance() {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    return previousBalanceTotal;
}
function updateBalance(amount, isAdd) {
    const balanceTotal = document.getElementById('balance-total');
    //const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    const previousBalanceTotal = getCurrentBalance();
    if (isAdd == true) {
        balanceTotal.innerText = previousBalanceTotal + amount;
    }
    else {
        balanceTotal.innerText = previousBalanceTotal - amount;
    }

}
document.getElementById('deposit-button').addEventListener('click', function () {
    // // console.log('deposit button clicked');
    // const depositInput = document.getElementById('deposit-input');
    // const depositAmountText = depositInput.value;
    // //console.log(depositAmountText);
    // const depositAmount = parseFloat(depositAmountText);
    const depositAmount = getInputValue('deposit-input');
    if (depositAmount > 0) {
        updateTotalField('deposit-total', depositAmount);
        updateBalance(depositAmount, true);
    }

    //get and update deposit total
    // const depositTotal = document.getElementById('deposit-total');
    // const depositTotalText = depositTotal.innerText;
    // //console.log(depositTotalText);
    // const previousDepositTotal = parseFloat(depositTotalText);
    // depositTotal.innerText = previousDepositTotal + depositAmount;


    //update balance
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal + depositAmount;


    // //clear input field 
    // depositInput.value = '';

});

//handle withdraw button
document.getElementById('withdraw-button').addEventListener('click', function () {
    // // console.log('withdraw button clicked');
    // const withdrawInput = document.getElementById('withdraw-input');
    // const withdrawAmountText = withdrawInput.value;
    // const withdrawAmount = parseFloat(withdrawAmountText);
    const withdrawAmount = getInputValue('withdraw-input');
    const CurrentBalance = getCurrentBalance();
    if (withdrawAmount > 0 && withdrawAmount < CurrentBalance) {
        updateTotalField('withdraw-total', withdrawAmount);
        updateBalance(withdrawAmount, false);
    }

    //get and update withdraw total 
    // const withdrawTotal = document.getElementById('withdraw-total');
    // const previousWithdrawTotalText = withdrawTotal.innerText;
    // const previousWithdrawTotal = parseFloat(previousWithdrawTotalText);
    // withdrawTotal.innerText = previousWithdrawTotal + withdrawAmount;


    //update balance total after withdraw
    // const balanceTotal = document.getElementById('balance-total');
    // const balanceTotalText = balanceTotal.innerText;
    // const previousBalanceTotal = parseFloat(balanceTotalText);
    // balanceTotal.innerText = previousBalanceTotal - withdrawAmount;


    // //clear withdraw input field
    // withdrawInput.value = '';
    if (withdrawAmount > CurrentBalance) {
        console.log('you do not have sufficient balance');
    }

});