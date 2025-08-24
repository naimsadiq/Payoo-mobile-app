const accountNumberDigit = 11;
const defultPinNumber = 1234;

// add money feature
document.getElementById('add-money-btn').addEventListener('click', function (event){
    event.preventDefault();
    const accountNumber = document.getElementById('account-number').value;
    const pinNumber = parseInt(document.getElementById('pin-number').value);
    if(accountNumber.length !== accountNumberDigit || pinNumber !== defultPinNumber){
        alert('Invalid Information');
        return; 
    }
    const addAmount = parseInt(document.getElementById('add-amount').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText) + addAmount;
    document.getElementById('available-balance').innerText = availableBalance;
})

// cash out feature 
document.getElementById('withdraw-btn').addEventListener('click', function(event){
    event.preventDefault();
    const cashOutAccountNumber = document.getElementById('cash-out-account-number').value;
    const cashOutPinNumber = parseInt(document.getElementById('cash-out-pin-number').value);
    if(cashOutAccountNumber.length !== accountNumberDigit || cashOutPinNumber !== defultPinNumber){
        alert('Invalid Information');
        return; 
    }
    const cashOutValue = parseInt(document.getElementById('cash-out-amount').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText) - cashOutValue;
    document.getElementById('available-balance').innerText = availableBalance;
    console.log(availableBalance);
})


// toggle feature 

document.getElementById('add-money').addEventListener('click', function(){
    document.getElementById('add-money-section').style.display = 'block';
    document.getElementById('cash-out-section').style.display = 'none';
})


document.getElementById('cash-out').addEventListener('click', function(){
    document.getElementById('cash-out-section').style.display = 'block';
    document.getElementById('add-money-section').style.display = 'none';
})