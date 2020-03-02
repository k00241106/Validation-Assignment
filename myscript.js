function validation(f) {
    //get the values from the input using const variables
    username = document.getElementById('userName').value;

    const firstName = document.getElementById('firstName').value;

    const lastName = document.getElementById('lastName').value;

    const bio = document.getElementById('bio').value;

    let cardNum = /^(?:3[47][0-9]{13})$/.value;

    const lineOnePostalAddress = document.getElementById('lineOnePostalAddress').value;

    const lineTwoPostalAddress = document.getElementById('lineTwoPostalAddress').value;

    const postCodePostal = document.getElementById('postCodePostal').value;

    const lineOneDelivery = document.getElementById('lineOneDelivery').value;

    const lineTwoDelivery = document.getElementById('lineTwoDelivery').value;

    const postCodeDelivery = document.getElementById('postCodeDelivery').value;

    const firstNameCard = document.getElementById('firstNameCard').value;

    const lastNameCard = document.getElementById('lastNameCard').value;

    const cvc = document.getElementById('cvc').value;

    if (username == '' || firstName == '' || lastName == '' || bio == '' || cardNum == '' || lineOnePostalAddress == ''
        || lineTwoPostalAddress == '' || lineOneDelivery == '' || lineTwoDelivery == '' || firstNameCard == '' || lastNameCard == '') {

        document.getElementById('eResult').innerHTML = "All Fields Required";
        return false;
    } else if (postCodePostal.length < 7) {
        document.getElementById('eResult').innerHTML = "Not a Valid Postal Post Code";
        return false;
    } else if (postCodeDelivery.length < 7) {
        document.getElementById('eResult').innerHTML = "Not a Valid Delivery Post Code";
        return false;
    } else if (cvc.length !== 3) {
        document.getElementById('eResult').innerHTML = "Not a valid CVC";
        return false;
    } else if (cardNum.value.match(/^(?:3[47][0-9]{13})$/)) {
        return true;
    } else {
        return true;
    }
}

function cardnumber(inputtxt) {
    var cardno = /^(?:3[47][0-9]{13})$/;
    if (inputtxt.value.match(cardno)) {
        return true;
    } else {
        alert("Not a valid Card Number");
        return false;
    }
}
function FillBilling(f) {
    if (f.billingtoo.checked == true) {
        f.lineOneDelivery.value = f.lineOnePostalAddress.value;
        f.lineTwoDelivery.value = f.lineTwoPostalAddress.value;
        f.postCodeDelivery.value = f.postCodePostal.value;
    }
}

function FillName(n){
    if(n.checkBoxName.checked == true){
        n.firstNameCard.value = n.firstName.value;
        n.lastNameCard.value = n.lastName.value;
    }
}