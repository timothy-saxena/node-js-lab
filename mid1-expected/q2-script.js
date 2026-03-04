function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var contact = document.getElementById("contact").value;
    var address = document.getElementById("address").value;

    if (username == "") {
        alert("Enter username");
        return false;
    }

    if (password == "") {
        alert("Enter password");
        return false;
    }

    if (email == "") {
        alert("Enter email");
        return false;
    }

    if (contact == "") {
        alert("Enter contact number");
        return false;
    }

    if (address == "") {
        alert("Enter address");
        return false;
    }

    alert("Registration Successful");
}
