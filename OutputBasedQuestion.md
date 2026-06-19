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
# JavaScript & React Interview Questions

## Question 1: JavaScript Closures

### What is the output of the following code?

```javascript
function createCounter() {
  let count = 0;
  return () => ++count;
}

const a = createCounter();
const b = createCounter();

a();
a();
b();

console.log(a());
```

### Answer

✅ Output:

```text
3
```

---

### Explanation

Each call to `createCounter()` creates a new closure with its own private `count` variable.

```javascript
const a = createCounter();
const b = createCounter();
```

At this point:

```text
a.count = 0
b.count = 0
```

---

### Execution Flow

#### First Call

```javascript
a();
```

Output:

```text
1
```

State:

```text
a.count = 1
b.count = 0
```

---

#### Second Call

```javascript
a();
```

Output:

```text
2
```

State:

```text
a.count = 2
b.count = 0
```

---

#### Third Call

```javascript
b();
```

Output:

```text
1
```

State:

```text
a.count = 2
b.count = 1
```

---

#### Final Call

```javascript
console.log(a());
```

Output:

```text
3
```

State:

```text
a.count = 3
b.count = 1
```

---

### Key Concept: Closures

A closure allows a function to remember and access variables from its outer scope even after the outer function has finished executing.

In this example:

```javascript
return () => ++count;
```

The returned function retains access to its own `count` variable.

Each invocation of:

```javascript
createCounter();
```

creates a completely independent closure.

---

### Interview Follow-Up

What will be the output?

```javascript
const c = createCounter();

console.log(c());
console.log(c());
console.log(c());
```

Answer:

```text
1
2
3
```

---

# Question 2: React useEffect & Stale Closures

### What is the output of the following React code?

```jsx
useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1);
  }, 1000);

  return () => clearInterval(id);
}, []);
```

---

## Expected Behavior?

Many developers expect:

```text
1
2
3
4
5
...
```

But that is NOT what happens.

---

## Actual Behavior

The counter becomes:

```text
1
```

and stays there.

---

## Why?

The dependency array is empty:

```jsx
[], 
```

which means:

```text
useEffect runs only once
```

During the first render:

```jsx
count = 0
```

The interval callback captures this value through a closure.

The callback effectively becomes:

```jsx
setInterval(() => {
  setCount(0 + 1);
}, 1000);
```

Every second it executes:

```jsx
setCount(1);
```

So React repeatedly tries to set the state to:

```text
1
```

Result:

```text
0 → 1 → 1 → 1 → 1
```

---

## This Problem Is Called

### Stale Closure

The interval callback closes over the initial value of `count` and never sees updated values.

---

## Correct Solution

Use a functional state update:

```jsx
useEffect(() => {
  const id = setInterval(() => {
    setCount(prev => prev + 1);
  }, 1000);

  return () => clearInterval(id);
}, []);
```

---

## Why Does This Work?

React provides the latest state value:

```jsx
setCount(prev => prev + 1);
```

Execution:

```text
0 → 1
1 → 2
2 → 3
3 → 4
...
```

Output:

```text
1
2
3
4
5
...
```

---

## Alternative Solution

Add `count` to the dependency array:

```jsx
useEffect(() => {
  const id = setInterval(() => {
    setCount(count + 1);
  }, 1000);

  return () => clearInterval(id);
}, [count]);
```

This works, but a new interval is created on every render.

Generally, the functional update approach is preferred.

---

# Key Interview Concepts

### JavaScript

* Closures
* Lexical Scope
* Function Factories
* Private State

### React

* useEffect
* Dependency Arrays
* Stale Closures
* Functional State Updates
* State Lifecycle

---

# Common Interview Question

What is the difference between these two approaches?

```jsx
setCount(count + 1);
```

vs

```jsx
setCount(prev => prev + 1);
```

### Answer

```jsx
setCount(count + 1);
```

Uses the value captured by the closure.

```jsx
setCount(prev => prev + 1);
```

Uses the latest state value maintained by React.

This distinction is crucial when working with:

* Timers
* Async operations
* Event listeners
* WebSocket callbacks
* Debounced functions


