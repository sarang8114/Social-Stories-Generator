// Validate sign-up form for matching passwords
function validateSignUpForm() {
    var email = document.getElementById("email-id").value;
    var password = document.getElementById("pwd").value;
    var confirmPassword = document.getElementById("confirm-pwd").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    // Email validation
    if (email === "") {
        alert("Email is required");
        return false;
    } else if (!emailPattern.test(email)) {
        alert("Please enter a valid email address");
        return false;
    }

    // Password validation
    if (password === "") {
        alert("Password is required");
        return false;
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters long");
        return false;
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return false;
    }

    return true;
}

// Handling the sign-up process with validation and Firebase Authentication
document.getElementById("signup-button").addEventListener("click", function () {
    if (validateSignUpForm()) {
        signup(); // Calling the signup function only after successful validation
    }
});
