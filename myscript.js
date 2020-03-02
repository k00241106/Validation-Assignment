function validation() {
    var username = document.getElementById('userName').value;
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var bio = document.getElementById('bio').value;
    var cardNumber = document.getElementById('cardNum').value;
    var lineOnePostalAddress = document.getElementById('lineOnePostalAddress').value;
    var lineTwoPostalAddress = document.getElementById('lineTwoPostalAddress').value;
    var postCodePostal = document.getElementById('postCodePostal').value;
    var lineOneDelivery = document.getElementById('lineOneDelivery').value;
    var lineTwoDelivery = document.getElementById('lineTwoDelivery').value;
    var postCodeDelivery = document.getElementById('postCodeDelivery').value;

    if (username == '' || firstName == '' || lastName == '' || bio == '' || cardNumber == '' || lineOnePostalAddress == '' || lineTwoPostalAddress == '' || postCodePostal == '' || lineOneDelivery == '' || lineTwoDelivery == '' || postCodeDelivery == '') {
        document.getElementById('eResult').innerHTML = "All Fields Required";
        return false;
    } else if (password.length < 4) {
        document.getElementById('eResult').innerHTML = "Password must be atleast 4 letters long";
        return false;
    }else if(postCodePostal.length < 7){
        document.getElementById('eResult').innerHTML = 'Not a Valid Post Code';
        return false;
    }
    else if(postCodeDelivery.length < 7){
        document.getElementById('eResult').innerHTML = 'Not a Valid Post Code';
        return false;
    }
    else {
        return true;
    }
}