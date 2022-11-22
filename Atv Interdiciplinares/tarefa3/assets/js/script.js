const form = document.querySelector(".loginForm");

form.addEventListener('submit', function (ev){
    ev.preventDefault();
    const userName = ev.target.querySelector("#username").value;
    const pass = ev.target.querySelector("#password").value;

    if(userName != 'admin') {
        window.alert("Wrong username!\n\nTry with admin.");
        console.log(userName);
    }
    else if(pass != "1234") {
        window.alert("Wrong password!\n\nTry with 1234.");
        console.log(pass);
    }
    else{
        window.alert("Login Succefull!");
        const msg = 'Bem vindo ao site!';
        
        setNewPage(userName, pass, msg);
    }
})

function setNewPage(username, password, message){
    const principal = document.querySelector(".container");
    const p = document.createElement("p");

    p.innerHTML = `Olá ${username}! <br />A senha ${password} está correta!<br />${message}`;

    principal.innerHTML = "";
    principal.appendChild(p);
}


