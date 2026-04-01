function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;

    // Username validation
    if (username.length < 3) {
        alert("Username must be at least 3 characters");
        return false;
    }

    // Password validation
    if (password.length < 8) {
        alert("Password must be at least 8 characters");
        return false;
    }

    if (password == password.toLowerCase()) {
        alert("Password must contain at least one capital letter");
        return false;
    }

    if (
        !password.includes("@") &&
        !password.includes("#") &&
        !password.includes("$") &&
        !password.includes("!")
    ) {
        alert("Password must contain at least one special character");
        return false;
    }

    // Email validation
    if (!email.includes("@")) {
        alert("Email must contain @");
        return false;
    }

    // Contact validation
    if (contact.length != 10) {
        alert("Contact number must be 10 digits");
        return false;
    }

    // Address validation
    if (address == "") {
        alert("Enter address");
        return false;
    }

    alert("Registration Successful");
}
