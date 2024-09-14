
function validateForm() {
    var email = document.getElementById("email-id").value;
    var password = document.getElementById("pwd").value;
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

    return true;
}

document.getElementById("login-button").addEventListener("click", function () {
    if (validateForm()) {
        login(); // Calling the login function only after successful validation
    }
});
