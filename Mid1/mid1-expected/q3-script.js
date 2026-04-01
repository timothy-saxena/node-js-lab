function validate() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    var user = username.value;
    var pass = password.value;

    if(!user.includes("@")){
        alert("username must contain an @ domain is short");
        username.style.backgroundColor = "red";
        return false;
    }
    if(pass.length < 8){
        alert("length of password is short");
        password.style.backgroundColor = "red";
        return false;
    }
    if(pass == pass.toLowerCase()){
        alert("atleast one capital letter must be there");
        password.style.backgroundColor = "red";
        return false;
    }
    if(!pass.includes("$") && !pass.includes("#") && !pass.includes("@") && !pass.includes("!")){
        alert("atleast one special letter must be there");
        password.style.backgroundColor = "red";
        return false;
    }

/*     var userPattern = /@/;
    var passPattern = /^(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/;

    if (!userPattern.test(user)) {
        alert("Username must contain @domain");
        username.style.backgroundColor = "red";
        return false;
    }

    if (!passPattern.test(pass)) {
        alert(
            "Password must contain 8 characters, 1 uppercase and 1 special symbol",
        );
        password.style.backgroundColor = "red";
        return false;
    }
 */
    alert("Registration Successful");
}
