const form = document.querySelector("#form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const email = document.querySelector("#email");
const mobileNum = document.querySelector("#phone-num");
const password = document.querySelector("#password");
const password2 = document.querySelector("#password2");
const gender = document.querySelector(".radio");
const message = document.querySelector("#message");
const accept = document.querySelector("#accept-to-continue");


form.addEventListener('submit', (e) => {
    if(!validate()){
        e.preventDefault();
    }
    // // e.preventDefault();
    // validate();
});



function validate() {
    const fnameValue = fname.value.trim();
    const lnameValue = lname.value.trim();
    const emailValue = email.value.trim();
    const mobileNumberValue = mobileNum.value.trim();
    const passwordValue = password.value;
    const passwordValue2 = password2.value;
    const messageValue = message.value;
    const checkBox = document.getElementById("accept-to-continue");
    let success = true;

    if (fnameValue === '') {
        success = false;
        setError(fname, 'First name is requierd.');
    }
    else {
        setSucces(fname);
    }
    if (lnameValue === '') {
        success = false;
        setError(lname, 'Last name is requierd.');
    }
    else {
        setSucces(lname);
    }

    if (emailValue === '') {
        success = false;
        setError(email, 'Email is requierd.');
    }
    else if (!isValidEmail(emailValue)) {
        success = false;
        setError(email, 'Enter correct email.')
    }
    else {
        setSucces(email)
    }

    if (mobileNumberValue === '') {
        success = false;
        setError(mobileNum, 'Mobile number is requierd.');
    }
    else if (!isvalidMobile(mobileNumberValue)) {
        success = false;
        setError(mobileNum, 'Enter correct mobile number.')
    }
    else {
        setSucces(mobileNum);
    }

    if (passwordValue === '') {
        success = false;
        setError(password, 'Password is requierd.');
    }
    else if (passwordValue.length < 8) {
        success = false;
        setError(password, 'Password must be 8 charecter long.');
    }
    else {
        setSucces(password)
    }

    if (passwordValue2 === '') {
        success = false;
        setError(password2, 'Re-enter your password.');
    }
    else if (passwordValue2 !== passwordValue) {
        success = false;
        setError(password2, 'Password does not match.');
    }
    else {
        setSucces(password2);
    }
    if (messageValue === '') {
        success = false;
        setError(message, 'Please enter your feedback to improve our service.');
    }
    else {
        setSucces(message);
    }

    let textCheck = document.getElementById("error")
    if (checkBox.checked){
        textCheck.innerHTML = ""
    }
    else{
        success = false
        textCheck.innerHTML = "Please accept to continue"
    }


    return success
}

function setError(element, message) {
    const inputGroup = element.parentElement;
    const errorDisplay = inputGroup.querySelector(".error");

    errorDisplay.innerText = message;
    inputGroup.classList.add('error');
    inputGroup.classList.remove('success');

}
function setSucces(element) {
    const inputGroup = element.parentElement;
    const errorDisplay = inputGroup.querySelector(".error");

    errorDisplay.innerText = '';
    inputGroup.classList.add('success');
    inputGroup.classList.remove('error');
}

const isValidEmail = (email) =>{
    return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
}

const isvalidMobile = (mobileNum) => {
    return mobileNum.match(/^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4}$/);
}


