const mobileNumber = 12345678910;
const pinNumber = 1234;

document.getElementById('form-btn').addEventListener('click', function (event){
    event.preventDefault();
    const mobileNumberValue = parseInt(document.getElementById('mobile-number').value);
    const pinNumberValue = parseInt(document.getElementById('pin-number').value);
    
    if(mobileNumber === mobileNumberValue && pinNumber === pinNumberValue){
        window.location.href = "./home.html";
    }else{
        alert('Invalid Information')
    }
})