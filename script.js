document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const loginButton = document.getElementById('loginButton');

    function checkFormValidity() {
        const isUsernameFilled = usernameInput.value.trim() !== '';
        const isPasswordFilled = passwordInput.value.trim() !== '';
        loginButton.disabled = !(isUsernameFilled && isPasswordFilled);
    }

    // Initial check on page load
    checkFormValidity();

    // Add event listeners to check validity on input change
    usernameInput.addEventListener('input', checkFormValidity);
    passwordInput.addEventListener('input', checkFormValidity);

    // Prevent form submission if button is disabled (extra precaution)
    loginForm.addEventListener('submit', function(event) {
        if (loginButton.disabled) {
            event.preventDefault();
            alert('Please fill in both username and password.');
        } else {
            // Here you would typically handle the actual login logic
            // For this example, we'll just show an alert
            alert('Form submitted successfully (for demonstration).');
            // event.preventDefault(); // Uncomment this to prevent actual form submission
        }
    });
});