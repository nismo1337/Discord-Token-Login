let token = "token here :D";

function login(token) {
setInterval(() => {
document.body.appendChild(document.createElement iframe).contentWindow.localStorage.token = "${token}"
}, 50);
}

login(token);
