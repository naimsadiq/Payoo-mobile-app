const mobileNumber = 12345678910;
const pinNumber = 1234;


function getIdValue(id){
    const getIdReturn = parseInt(document.getElementById(id).value);
    return getIdReturn;
}

document.getElementById('form-btn').addEventListener('click', function (event){
    event.preventDefault();
    const mobileNumberValue = getIdValue('mobile-number');
    const pinNumberValue = getIdValue('pin-number');
    
    if(mobileNumber === mobileNumberValue && pinNumber === pinNumberValue){
        window.location.href = "./home.html";
    }else{
        alert('Invalid Information')
    }
})