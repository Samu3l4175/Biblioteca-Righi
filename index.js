register = document.getElementById("register");
login = document.getElementById("login");
loginPage = document.querySelector(".login");
registerPage = document.querySelector(".register-box");
bottone = document.querySelector(Accedi);
password = document.getElementById("password");
email = document.getElementById("email");
passwordRegistrazione = document.getElementById("passwordRegistrazione");
emailRegistrazione = document.getElementById("emailRegistrazione");


bottone.addEventListener("click", ()=>{
    console.log(email.value);
    console.log(password.value);
})

register.addEventListener("click", ()=>{
    loginPage.classList.add("active");
    registerPage.classList.remove("active");
})

login.addEventListener("click", ()=>{
    loginPage.classList.remove("active");
    registerPage.classList.add("active");
})
