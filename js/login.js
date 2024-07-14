// step-1: add click event handler with the submit button
// step-2: get the email address inside the email input field
// always remember to use .value to get text from an input field
// step-3: get password
// 3.a: set id on the html element 
// 3.b: get the element
// 3.c: get the value from the element
// DANGER: DO NOT VERIFY email password on the client side 
// step-4: verify email and password and check whether valid user or not

// step-1
document.getElementById('login-btn').addEventListener('click', function () {
    // step-2
    const emailInputField = document.getElementById('email-field');
    const emailField = emailInputField.value;
    
    // step-3
    const passwordInputField = document.getElementById('password-field');
    const passwordField = passwordInputField.value;

    // step-4
    if(emailField === 'demo@gmail.com' && passwordField === 'demo123'){
        window.location.href = 'dashboard.html';
    }else{
        alert('Invalid Username or Password');
    }
})