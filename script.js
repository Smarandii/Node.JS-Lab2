login = document.getElementById("login");
password = document.getElementById("password");
loginBtn = document.getElementById("login_btn");
form = document.getElementById("form");
password.addEventListener("typing", (e) => {

})

loginBtn.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(login.value);
    console.log(password.value);
    const rawRespone = fetch('v1/authorization', {
        method: 'POST',
        body: JSON.stringify({"password": password.value, "login": login.value})
    });
    const content = rawRespone.json();
    console.log(content);
    
});
