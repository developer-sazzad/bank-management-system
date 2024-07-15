// step-1: add event listener to the deposit button
// step-2: get the deposit amount from the deposit input field
// For input field use .value to the the value inside the input field
// step-3: get the current deposit total
// for non-input(element other than input, textarea) use innerText to get the text
// step-4: add numbers to set the total deposit
// step-5: get ballance current total
// step-6: calculate current total balance
// step-7: clear the deposit field

// Step-1
document.getElementById('deposit-btn').addEventListener('click', function () {
    // Step-2
    const depositField = document.getElementById('deposit-input');
    const depositFieldString = depositField.value;
    const newDepositAmount = parseFloat(depositFieldString);

    // step-7
    depositField.value = '';

    if (isNaN(newDepositAmount)) {
        alert('Please provide a valid number');
        return;
    }
    // Step-3
    const depositTotalElement = document.getElementById('deposit-total');
    const depositElementString = depositTotalElement.innerText;
    const previousDepositAmount = parseFloat(depositElementString);

    // Step-4
    const currectDepositAmout = previousDepositAmount + newDepositAmount;
    depositTotalElement.innerText = currectDepositAmout;

    // step-5
    const totalDepositElement = document.getElementById('total-balence');
    const totalDepositString = totalDepositElement.innerText;
    const totalDeposit = parseFloat(totalDepositString);

    // step-6
    const totalBalence = totalDeposit + newDepositAmount;
    totalDepositElement.innerText = totalBalence;


})