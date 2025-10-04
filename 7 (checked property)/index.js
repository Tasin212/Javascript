// .checked = property that determines the check state of an HTML checkbox or rario button element

const myCheckBox = document.getElementById('myCheckBox');
const visaBtn = document.getElementById('visaBtn');
const masterCardBtn = document.getElementById('masterCardBtn');
const payPalBtn = document.getElementById('payPalBtn');
const mySubmit = document.getElementById('mySubmit');
const subResult = document.getElementById('subResult');
const paymentResult = document.getElementById('paymentResult');

mySubmit.onclick = function() {
    
    if(myCheckBox.checked) {
        subResult.textContent = `You are subscribed!`;
    }
    else{
        subResult.textContent = `You are not subscribed!!`;
    }

    if(visaBtn.checked) {
        paymentResult.textContent = `You payment confirmed by Visa Card`;
    }
    else if(masterCardBtn.checked) {
        paymentResult.textContent = `Your payment confirmed by Master Card`;
    }
    else if(payPalBtn.checked) {
        paymentResult.textContent = `Your Payment confirmed by PayPal`;
    }
    else {
        paymentResult.textContent = `Your payment not confirmed!!`
    }


}



