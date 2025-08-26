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

    // transction add 
    const addMoneyBank = document.getElementById('add-money-bank').value;
    let timeShow = new Date().toLocaleTimeString();
    const cardConteiner = document.getElementById('card-conteiner');
    const newElement = document.createElement('div');
    newElement.innerHTML = `<div id="card" class="bg-[#FFFFFF] flex justify-between items-center p-3.5 rounded-[10px] mb-3.5">
                                <div class="flex items-center">
                                    <div class="w-[50px] h-[50px] rounded-3xl bg-[#0808080d] flex items-center justify-center "><img src="./assets/wallet1.png" alt=""></div>
                                        <div class="ml-[15px]">
                                            <h4 class="text-[#080808b3] font-semibold">${addMoneyBank}</h4>
                                            <p class="text-[12px] text-[#080808b3]">Today <span>${timeShow}</span></p>
                                        </div>
                                    </div>
                                <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                            </div>` 
    
    cardConteiner.appendChild(newElement);
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
    const bkash = 'Mobile Recharge';

    // transction add 
    // const addMoneyBank = document.getElementById('add-money-bank').value;
    let timeShow = new Date().toLocaleTimeString();
    const cardConteiner = document.getElementById('card-conteiner');
    const newElement = document.createElement('div');
    newElement.innerHTML = `<div id="card" class="bg-[#FFFFFF] flex justify-between items-center p-3.5 rounded-[10px] mb-3.5">
                                <div class="flex items-center">
                                    <div class="w-[50px] h-[50px] rounded-3xl bg-[#0808080d] flex items-center justify-center "><img src="./assets/wallet1.png" alt=""></div>
                                        <div class="ml-[15px]">
                                            <h4 class="text-[#080808b3] font-semibold">${bkash}</h4>
                                            <p class="text-[12px] text-[#080808b3]">Today <span>${timeShow}</span></p>
                                        </div>
                                    </div>
                                <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                            </div>` 
    
    cardConteiner.appendChild(newElement);
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
    const diposit = 'DipoBank Deposit';

    // transction add 
    // const addMoneyBank = document.getElementById('add-money-bank').value;
    let timeShow = new Date().toLocaleTimeString();
    const cardConteiner = document.getElementById('card-conteiner');
    const newElement = document.createElement('div');
    newElement.innerHTML = `<div id="card" class="bg-[#FFFFFF] flex justify-between items-center p-3.5 rounded-[10px] mb-3.5">
                                <div class="flex items-center">
                                    <div class="w-[50px] h-[50px] rounded-3xl bg-[#0808080d] flex items-center justify-center "><img src="./assets/wallet1.png" alt=""></div>
                                        <div class="ml-[15px]">
                                            <h4 class="text-[#080808b3] font-semibold">${diposit}</h4>
                                            <p class="text-[12px] text-[#080808b3]">Today <span>${timeShow}</span></p>
                                        </div>
                                    </div>
                                <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                            </div>` 
    
    cardConteiner.appendChild(newElement);
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

// Pay Bill feature 
document.getElementById('pay-bill-btn').addEventListener('click', function (event){
    event.preventDefault();
    const payBillAccountNumber = document.getElementById('pay-bill-account-number').value;
    const payBillPinNumber = parseInt(document.getElementById('pay-bill-pin-number').value);
    if(payBillAccountNumber.length !== accountNumberDigit || payBillPinNumber !== defultPinNumber){
        alert('Invalid Information');
        return; 
    }
    const payBillAmount = parseInt(document.getElementById('pay-bill-amount').value);
    const availableBalance = parseInt(document.getElementById('available-balance').innerText) - payBillAmount;
    document.getElementById('available-balance').innerText = availableBalance;
    // alert('Bill Submit');


    // transction add 
    const addMoneyBank = document.getElementById('pay-bill-bank').value;
    let timeShow = new Date().toLocaleTimeString();
    const cardConteiner = document.getElementById('card-conteiner');
    const newElement = document.createElement('div');
    newElement.innerHTML = `<div id="card" class="bg-[#FFFFFF] flex justify-between items-center p-3.5 rounded-[10px] mb-3.5">
                                <div class="flex items-center">
                                    <div class="w-[50px] h-[50px] rounded-3xl bg-[#0808080d] flex items-center justify-center "><img src="./assets/wallet1.png" alt=""></div>
                                        <div class="ml-[15px]">
                                            <h4 class="text-[#080808b3] font-semibold">${addMoneyBank}</h4>
                                            <p class="text-[12px] text-[#080808b3]">Today <span>${timeShow}</span></p>
                                        </div>
                                    </div>
                                <div><i class="fa-solid fa-ellipsis-vertical"></i></div>
                            </div>` 
    
    cardConteiner.appendChild(newElement);
})

// transactions feature 


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
document.getElementById('transactions').addEventListener('click', function(){
    formShow('transaction-history-section')
})