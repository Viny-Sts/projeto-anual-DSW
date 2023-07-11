function validarLogin() {
    if (document.getElementById("email").value === "" ||
        document.getElementById("password").value === "") {
        alert("Os campos estão em branco!");
    } else {
        location.href = "main.html";
    }
}
