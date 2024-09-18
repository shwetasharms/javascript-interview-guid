
# Asynchronous Programming in JavaScript

This README covers various concepts related to asynchronous programming in JavaScript, including Callbacks, Timers, Promises, and Async & Await.

## Table of Contents

1. [Callbacks](#callbacks)
2. [Timers](#timers)
3. [Promises](#promises)
4. [Async & Await](#async--await)

---

## 𝗔𝘀𝘆𝗻𝗰𝗵𝗿𝗼𝗻𝗼𝘂𝘀 𝗣𝗿𝗼𝗴𝗿𝗮𝗺𝗺𝗶𝗻𝗴

### 1. Callbacks
Callbacks are functions passed as arguments to other functions. They are used to handle tasks that run asynchronously, ensuring that code execution continues after an operation is complete.

Example:
```js
function fetchData(callback) {
    setTimeout(() => {
        callback("Data received");
    }, 1000);
}

function displayData(data) {
    console.log(data);
}

fetchData(displayData);
```

[Back to top](#table-of-contents)

---

### 2. Timers
Timers in JavaScript allow functions to be executed after a delay or at regular intervals. Two common timer functions are `setTimeout()` and `setInterval()`.

Example:
```js
setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);
```

[Back to top](#table-of-contents)

---

### 3. Promises
Promises represent a value that may be available now, in the future, or never. They are used for handling asynchronous operations and provide better error handling than callbacks.

Example:
```js
let promise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Promise resolved");
    } else {
        reject("Promise rejected");
    }
});

promise.then((message) => {
    console.log(message);
}).catch((error) => {
    console.error(error);
});
```

[Back to top](#table-of-contents)

---

### 4. Async & Await
`async` and `await` are syntactic sugar built on top of Promises. They make asynchronous code look and behave more like synchronous code, making it easier to read and understand.

Example:
```js
async function fetchData() {
    let response = await fetch("https://api.example.com/data");
    let data = await response.json();
    console.log(data);
}

fetchData();
```

[Back to top](#table-of-contents)
```

This structure allows users to click on any topic in the TOC to navigate to the respective section, and also includes "Back to top" links for easy navigation back to the TOC.
