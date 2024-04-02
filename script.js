const password = document.getElementById("password")
const confirmPassword = document.getElementById("password-confirm")
const passwordMatch = document.getElementById("password-match");
const submitForm = document.getElementById("submit");

confirmPassword.addEventListener("input", () => {
    if (password.value !== confirmPassword.value){
        passwordMatch.style.display = "block";
    } else{
        passwordMatch.style.display = "none";
    }
});

submitForm.addEventListener("click", function(e) {
    if (password.value !== confirmPassword.value){
        e.preventDefault();
    }
});