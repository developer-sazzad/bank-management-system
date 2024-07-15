// step-1: add event listener to the deposit button
// step-2: get the deposit amount from the deposit input field
// For input field use .value to the the value inside the input field
// step-3: get the current deposit total
// for non-input(element other than input, textarea) use innerText to get the text
// step-4: add numbers to set the total deposit
// step-5: get ballance current total
// step-6: calculate current total balance
// step-7: clear the deposit field


// step-1
document.getElementById('withdraw-btn').addEventListener('click', function () {
    // step-2
    const withdrawField = document.getElementById('withdraw-input');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);

    // step-7
    withdrawField.value = '';

    if (isNaN(newWithdrawAmount)) {
        alert('Please provide a valid number');
        return;
    }
    // step-3:
    const previousWithdrawElement = document.getElementById('withdraw-total');
    const previousWithdrawString = previousWithdrawElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawString);

    
    // step-5
    const totalWithdrawElement = document.getElementById('total-balence');
    const totalWithdrawString = totalWithdrawElement.innerText;
    const totalWithdraw = parseFloat(totalWithdrawString);


    if(newWithdrawAmount > totalWithdraw){
        alert('Toor nanar Bank e taka nai..!!')
        return;
    }
    
    // step-4
    const currentWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    previousWithdrawElement.innerText = currentWithdrawTotal;

    // step-6
    const totalBalence = totalWithdraw - newWithdrawAmount;
    totalWithdrawElement.innerText = totalBalence;

})