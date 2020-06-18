function submition() {
    var submitButton = document.getElementById('ema').value
    var subRegex = /\$|:|#|\*|\/|"|~|'|\||%|!|\^|&|\(|\)|-|\+|\=|\`|\?|<|>|\;|\.|\\| /
    var subb = subRegex.test(submitButton)
    var atRegex = /@/g
    var at = atRegex.test(submitButton)
    if (subb == true) {
        document.getElementById('email-verification').innerHTML = "please insert a valid email";
        document.getElementById('email-verification').style.visibility = 'visible';
    } else if (at == false) {
        document.getElementById('email-verification').innerHTML = "please include an @ in the email address";
        document.getElementById('email-verification').style.visibility = 'visible';

    }


}


function passVerification() {

    var passwordVerify = document.getElementById('pass').value

    if (passwordVerify.length < 6) {
        document.getElementById('pass-verify').innerHTML = "Your Password too is short";
        document.getElementById('pass-verify').style.visibility = 'visible';
    } else if (passwordVerify.length >= 11) {
        document.getElementById('pass-verify').innerHTML = "Your Password too is long";
        document.getElementById('pass-verify').style.visibility = 'visible';
    }

}




