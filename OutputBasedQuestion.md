# JavaScript Output Interview Question: Event Loop, Microtasks & Macrotasks

## Question 1

```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
Promise.resolve().then(() => console.log("3"));
console.log("4");
```

### 1️⃣ What's the output?

### 2️⃣ Why?

✅ **Output**

```text
1
4
3
2
```

Or:

```text
1 → 4 → 3 → 2
```

## Explanation

### Step 1: Synchronous Code Executes First

```javascript
console.log("1");
```

Prints:

```text
1
```

---

### Step 2: `setTimeout` Goes to the Macrotask Queue

```javascript
setTimeout(() => console.log("2"), 0);
```

Even with a delay of `0ms`, the callback does **not** execute immediately.

It is placed in the **Callback Queue (Macrotask Queue)**.

---

### Step 3: Promise Callback Goes to the Microtask Queue

```javascript
Promise.resolve().then(() => console.log("3"));
```

The `.then()` callback is placed in the **Microtask Queue**.

---

### Step 4: Continue Executing Synchronous Code

```javascript
console.log("4");
```

Prints:

```text
4
```

Current output:

```text
1
4
```

---

### Step 5: Call Stack Becomes Empty

Once all synchronous code finishes, JavaScript checks the queues.

JavaScript always processes:

1. Call Stack
2. All Microtasks
3. One Macrotask
4. Repeat

---

### Step 6: Execute Microtasks

The Promise callback runs:

```javascript
console.log("3");
```

Output:

```text
1
4
3
```

---

### Step 7: Execute Macrotasks

The `setTimeout` callback runs:

```javascript
console.log("2");
```

Final output:

```text
1
4
3
2
```

---

## Key Interview Concept

Many candidates can predict the output.

The real interview question is:

> Can you explain **why** the output happens using the JavaScript Event Loop, Call Stack, Microtask Queue, and Macrotask Queue?

Understanding the execution model is more important than memorizing outputs.

---

# Challenge Question

Can you solve this?

```javascript
console.log("A");

setTimeout(() => console.log("B"), 0);

Promise.resolve().then(() => {
  console.log("C");
});

Promise.resolve().then(() => {
  console.log("D");
});
```

### Options

**a.** A C D B

**b.** A D C B

**c.** A B D C

**d.** A B C D

---

## Answer

✅ **a. A C D B**

### Why?

1. `console.log("A")` runs immediately.
2. `setTimeout(...)` goes to the **Macrotask Queue**.
3. First Promise callback goes to the **Microtask Queue**.
4. Second Promise callback also goes to the **Microtask Queue**.
5. Synchronous code finishes.

Now JavaScript processes:

* All Microtasks first → `C`, then `D`
* Then Macrotasks → `B`

Final output:

```text
A
C
D
B
```

## Interview Tip

Remember this rule:

> **Microtasks always execute before Macrotasks.**

Common Microtasks:

* `Promise.then()`
* `Promise.catch()`
* `Promise.finally()`
* `queueMicrotask()`

Common Macrotasks:

* `setTimeout()`
* `setInterval()`
* DOM events
* MessageChannel callbacks

### Event Loop Priority

```text
Call Stack
    ↓
Microtask Queue
    ↓
Macrotask Queue
```

# JavaScript Output Interview Question: Async/Await, Promises & Event Loop

## Question

```javascript
async function async1() {
  console.log('async1 start');

  await async2();

  console.log('async1 end');
}

async function async2() {
  console.log('async2');
}

console.log('script start');

setTimeout(function() {
  console.log('setTimeout');
}, 0);

async1();

new Promise(function(resolve) {
  console.log('promise1');
  resolve();
}).then(function() {
  console.log('promise2');
});

console.log('script end');
```

## 1️⃣ What's the Output?

### ✅ Output

```text
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
```

Or:

```text
script start
→ async1 start
→ async2
→ promise1
→ script end
→ async1 end
→ promise2
→ setTimeout
```

---

## 2️⃣ Why?

### Step 1: Synchronous Code Executes First

```javascript
console.log('script start');
```

Output:

```text
script start
```

---

### Step 2: Register `setTimeout`

```javascript
setTimeout(function() {
  console.log('setTimeout');
}, 0);
```

The callback is placed in the **Macrotask Queue**.

Nothing is printed yet.

---

### Step 3: Execute `async1()`

```javascript
async1();
```

Inside `async1`:

```javascript
console.log('async1 start');
```

Output:

```text
async1 start
```

---

### Step 4: Execute `async2()`

```javascript
await async2();
```

Calling `async2()` immediately executes:

```javascript
console.log('async2');
```

Output:

```text
async2
```

`async2()` returns a resolved Promise.

The `await` pauses `async1()` and schedules the remaining code:

```javascript
console.log('async1 end');
```

as a **Microtask**.

---

### Step 5: Execute Promise Constructor

```javascript
new Promise(function(resolve) {
  console.log('promise1');
  resolve();
});
```

The Promise executor runs immediately.

Output:

```text
promise1
```

---

### Step 6: Register `.then()` Callback

```javascript
.then(function() {
  console.log('promise2');
});
```

The `.then()` callback is added to the **Microtask Queue**.

---

### Step 7: Continue Synchronous Execution

```javascript
console.log('script end');
```

Output:

```text
script end
```

Current output:

```text
script start
async1 start
async2
promise1
script end
```

---

## Microtask Queue Processing

The call stack is now empty.

JavaScript executes all microtasks before any macrotasks.

### Microtask Queue Order

1. Resume `async1()` after `await`
2. Execute Promise `.then()`

---

### Microtask #1

```javascript
console.log('async1 end');
```

Output:

```text
async1 end
```

---

### Microtask #2

```javascript
console.log('promise2');
```

Output:

```text
promise2
```

---

## Macrotask Queue Processing

Now JavaScript processes:

```javascript
console.log('setTimeout');
```

Output:

```text
setTimeout
```

---

## Final Output

```text
script start
async1 start
async2
promise1
script end
async1 end
promise2
setTimeout
```

---

# Event Loop Visualization

```text
Call Stack
│
├── script start
├── async1 start
├── async2
├── promise1
├── script end
│
└── Empty
      ↓
Microtask Queue
├── async1 end
└── promise2
      ↓
Macrotask Queue
└── setTimeout
```

---

# Key Interview Concepts

### `async/await`

```javascript
await value;
```

is roughly equivalent to:

```javascript
Promise.resolve(value).then(() => {
  // remaining code
});
```

The code after `await` always runs as a **Microtask**.

---

### Microtasks

Examples:

```javascript
Promise.then()
Promise.catch()
Promise.finally()
queueMicrotask()
await
```

---

### Macrotasks

Examples:

```javascript
setTimeout()
setInterval()
DOM Events
MessageChannel
```

---

## Golden Rule

> JavaScript always executes all Microtasks before moving to the next Macrotask.

This is why:

```text
async1 end
```

appears before:

```text
promise2
```

and both appear before:

```text
setTimeout
```

---

## Common Interview Follow-up

What happens if we replace:

```javascript
await async2();
```

with:

```javascript
async2();
```

Will `async1 end` still execute as a microtask?

Think carefully before answering.

