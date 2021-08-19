document.getElementById("submit").addEventListener("click", function () {
    const emailField = document.getElementById("email");
    const userEmail = emailField.value;
    const passwordField = document.getElementById("password");
    const userPassword = passwordField.value;

    if (userEmail == "rahmatapon402@gmail.com" && userPassword == 123) {
        window.location.href = "banking.html";
    } else {
        console.log(alert("Failed. check your email or password"),);
    }
});

// Handle deposit 

