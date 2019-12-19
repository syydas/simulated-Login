function checkInfo() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");
    if (username.value === "123" && password.value === "123") {
        alert("Wow, login successful!")
    } else {
        alert("Please check your username and password");
        password.value = "";
    }
}