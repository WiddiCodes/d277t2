function checkEmail() {
    let email = document.getElementById('email').value;
    let verifyEmail = document.getElementById('confirm_email').value;
    const submitBtn = document.getElementById('submitBtn');
    const emailError = document.getElementById('emailError');

    if (email === verifyEmail) {
        submitBtn.disabled = false;
        emailError.textContent = '';
    } else {
        submitBtn.disabled = true;
        emailError.textContent = 'Emails do not match';
    }
}