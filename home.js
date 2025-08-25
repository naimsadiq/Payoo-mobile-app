const accountNumberDigit = 11;
const defultPinNumber = 1234;
const bonusCoupon = 'naimsadiq';
const bonusMoney = 5000;

// small code function

function formShow(id){
    const forms = document.getElementsByClassName('form');
    for(const form of forms){
        form.style.display = 'none';
    }
    document.getElementById(id).style.display = 'block';
}

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
})


// Transfer Money feature 
document.getElementById('send-now-btn').addEventListener('click', function(event){
    event.preventDefault();
    const transferAccountNumber = document.getElementById('transfer-money-account-number').value;
    const transferPinNumber = parseInt(document.getElementById('transfer-money-pin-number').value);
    if(transferAccountNumber.length !== accountNumberDigit || transferPinNumber !== defultPinNumber){
        alert('Invalid Information');
        return; 
    }
    const transferMoneyValue = parseInt(document.getElementById('transfer-money-amount').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText) - transferMoneyValue;
    document.getElementById('available-balance').innerText = availableBalance;
})


// Get Bonus feature 
document.getElementById('get-bonus-btn').addEventListener('click', function(event){
    event.preventDefault();
    const bonusCouponValue = document.getElementById('bonus-coupon').value;
    if(bonusCouponValue !== bonusCoupon){
        alert('Invalid Coupon');
        return;
    }
    const availableBalance = parseInt(document.getElementById('available-balance').innerText) + bonusMoney;
    document.getElementById('available-balance').innerText = availableBalance;
    console.log(typeof(availableBalance));
})

// toggle feature 

document.getElementById('add-money').addEventListener('click', function(){
    formShow('add-money-section')
})


document.getElementById('cash-out').addEventListener('click', function(){
    formShow('cash-out-section')
})


document.getElementById('transfer-money').addEventListener('click', function(){
    formShow('transfer-money-section')
})

document.getElementById('get-bonus').addEventListener('click', function(){
    formShow('get-bonus-section')
})
document.getElementById('pay-bill').addEventListener('click', function(){
    formShow('pay-bill-section')
})