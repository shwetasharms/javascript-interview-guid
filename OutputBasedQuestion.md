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

If you understand this order, you'll solve most JavaScript Event Loop interview questions correctly.
