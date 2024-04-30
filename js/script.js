let password=document.getElementById("password");
let email=document.getElementById("email");
let error=document.getElementById("error");
let phone=document.getElementById("phone");

//login page
function formvalidation()
{
    let regexp=/^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/

    if(regexp.test(email.value))
    {
        error.innerHTML="Valid email id";
        error.style.color="green";
        return true;
    }
    else{
        error.innerHTML="Please enter a valid email id";
        error.style.color="red";
        return false;
    }
}



function checkPasswordStrength() {
    var password = document.getElementById('password').value;
    var strength = 0;

    // Check length
    if (password.length >= 8) {
        strength += 1;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength += 1;
    }

    // Check for digits
    if (/\d/.test(password)) {
        strength += 1;
    }

    var passwordStrengthLabel = document.getElementById('password-strength');

    if (strength <= 1) {
        passwordStrengthLabel.textContent = 'Weak';
        passwordStrengthLabel.classList.remove('medium', 'strong');
        passwordStrengthLabel.classList.add('weak');
    } else if (strength <= 3) {
        passwordStrengthLabel.textContent = 'Medium';
        passwordStrengthLabel.classList.remove('weak', 'strong');
        passwordStrengthLabel.classList.add('medium');
    } else {
        passwordStrengthLabel.textContent = 'Strong';
        passwordStrengthLabel.classList.remove('weak', 'medium');
        passwordStrengthLabel.classList.add('strong');
    }
}



//signin page



function formvalidate() {
    let email = document.getElementById("email");
    let phone = document.getElementById("phone");
    let emailError = document.getElementById("email-error");
    let phoneError = document.getElementById("phone-error");

    // Regular expression for email validation
    let emailRegex = /^([A-Za-z0-9\.-]+)@([A-Za-z0-9\-]+).([a-z]{2,3})(.[a-z]{2,3}?)$/;

    // Regular expression for phone number validation
    let phoneRegex = /^\d{10}$/;

    let emailIsValid = emailRegex.test(email.value);
    let phoneIsValid = phoneRegex.test(phone.value);

    if (emailIsValid) {
        emailError.innerHTML = "Valid email address";
        emailError.style.color="green";
    } else {
        emailError.innerHTML = "Please enter a valid email id";
        emailError.style.color="red";
    }

    if (phoneIsValid) {
        phoneError.innerHTML = "Valid phone number";
        phoneError.style.color="green";
    } else {
        phoneError.innerHTML = "please enter a valid phone number";
        phoneError.style.color="red";
    }

    return emailIsValid && phoneIsValid;
}


function checkPasswordStrength2() {
    var password = document.getElementById('password').value;
    var strength = 0;

    // Check length
    if (password.length >= 8) {
        strength += 1;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    // Check for lowercase letters
    if (/[a-z]/.test(password)) {
        strength += 1;
    }

    // Check for digits
    if (/\d/.test(password)) {
        strength += 1;
    }

    var passwordStrengthLabel = document.getElementById('password-strength');

    if (strength <= 1) {
        passwordStrengthLabel.textContent = 'Weak';
        passwordStrengthLabel.classList.remove('medium', 'strong');
        passwordStrengthLabel.classList.add('weak');
    } else if (strength <= 3) {
        passwordStrengthLabel.textContent = 'Medium';
        passwordStrengthLabel.classList.remove('weak', 'strong');
        passwordStrengthLabel.classList.add('medium');
    } else {
        passwordStrengthLabel.textContent = 'Strong';
        passwordStrengthLabel.classList.remove('weak', 'medium');
        passwordStrengthLabel.classList.add('strong');
    }
}


