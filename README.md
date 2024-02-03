# Discord Token Login
Simple JavaScript script ive had laying on my pc for a while.

```js
let token = "your token";

function login(token) {
    setInterval(() => {
      document.body.appendChild(document.createElement `iframe`).contentWindow.localStorage.token = `"${token}"`
    }, 50);
    setTimeout(() => {
      location.reload();
    }, 2500);
  }

login(token);
```

## How do I use this?

Simply replace "your token" with your token and then run it in your browsers developer console.

