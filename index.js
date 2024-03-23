register = document.getElementById("register");
login = document.getElementById("login");
loginPage = document.querySelector(".login");
registerPage = document.querySelector(".register-box");

register.addEventListener("click", ()=>{
    loginPage.classList.add("active");
    registerPage.classList.remove("active");
})

login.addEventListener("click", ()=>{
    loginPage.classList.remove("active");
    registerPage.classList.add("active");
})