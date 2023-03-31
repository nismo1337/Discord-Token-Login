# Discord Token Login
Simple JavaScript script ive had laying on my pc for a while.

```js
let token = "token here :D";

function login(token) {
setInterval(() => {
document.body.appendChild(document.createElement iframe).contentWindow.localStorage.token = "${token}"
}, 50);
}

login(token);
```
