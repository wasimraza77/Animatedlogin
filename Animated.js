document.getElementById('login-form').addEventListener('submit', function(e) {
    e.preventDefault();
    let valid = true;

    const username = document.getElementById('username');
    const password = document.getElementById('password');
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');

    // Reset error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Username validation
    if (username.value.trim() === '') {
        usernameError.textContent = 'Username is required';
        usernameError.classList.add('visible');
        valid = false;
    }

    // Password validation
    if (password.value.length < 6) {
        passwordError.textContent = 'Password must be at least 6 characters';
        passwordError.classList.add('visible');
        valid = false;
    }

    // If valid, submit the form (or handle the login)
    if (valid) {
        console.log('Form submitted successfully!');
        // You can also add your login logic here
    }
});
