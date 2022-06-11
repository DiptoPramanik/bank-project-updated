document.getElementById('submit-login').addEventListener('click', function () {
    // console.log('button clicked');
    //get user Email
    const emailField = document.getElementById('user-email');
    const userEmail = emailField.value;
    // console.log(userEmail);
    //get user Password
    const passwordField = document.getElementById('user-password');
    const userPassword = passwordField.value;
    // console.log(userPassword);
    if (userEmail == 'personal@family.com' && userPassword == 'secretpass') {
        // console.log('valid user');
        window.location.href = 'banking.html';
    }

});