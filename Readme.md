# JavaScript Interview Questions

This document organizes essential JavaScript questions by topic, providing answers to key concepts like promises, closures, event handling, and more. Use it to enhance your understanding and prepare for JavaScript interviews.

## Table of Contents

### 1. JavaScript Basics
- [What are the different data types in JavaScript?](#what-are-the-different-data-types-in-javascript)
- [What is the difference between `==` and `===` in JavaScript?](#what-is-the-difference-between-and)
- [What is the difference between `null` and `undefined`?](#what-is-the-difference-between-null-and-undefined)
- [What is Hoisting?](#what-is-hoisting)
- [What is the Temporal Dead Zone?](#what-is-the-temporal-dead-zone)
- [What is Lexical Scope?](#what-is-lexical-scope)

### 2. Functions and Closures
- [What is the difference between function declaration and function expression?](#what-is-the-difference-between-function-declaration-and-function-expression)
- [What are Closures?](#what-are-closures)
- [What is the `this` keyword in JavaScript, and how does it work?](#what-is-the-this-keyword-in-javascript-and-how-does-it-work)
- [What is the difference between `call`, `apply`, and `bind`?](#what-is-the-difference-between-call-apply-and-bind)

### 3. Promises and Asynchronous JavaScript
- [What is a Promise and Why is it Needed?](#what-is-a-promise-and-why-is-it-needed)
- [What is Promise Chaining?](#what-is-promise-chaining)
- [What is `Promise.all`?](#what-is-promiseall)
- [What is the Purpose of the `Promise.race` Method?](#what-is-the-purpose-of-the-promiserace-method)
- [What is async/await and How Does it Simplify Working with Promises?](#what-is-asyncawait-and-how-does-it-simplify-working-with-promises)
- [What is a Callback Function and Why Do We Need Callbacks?](#what-is-a-callback-function-and-why-do-we-need-callbacks)
- [What is Callback Hell?](#what-is-callback-hell)

### 4. Event Handling
- [What are Events in JavaScript?](#what-are-events-in-javascript)
- [What is Event Flow?](#what-is-event-flow)
- [What is Event Bubbling?](#what-is-event-bubbling)
- [What is Event Capturing?](#what-is-event-capturing)
- [What is the Event Loop?](#what-is-the-event-loop)
- [What is the Event Queue?](#what-is-the-event-queue)

### 5. Objects and Inheritance
- [How Do You Clone an Object in JavaScript?](#how-do-you-clone-an-object-in-javascript)
- [Explain Prototypal Inheritance.](#explain-prototypal-inheritance)

### 6. JavaScript Operators and Expressions
- [What is the Spread Operator?](#what-is-the-spread-operator)

### 7. Timing Functions
- [What is the difference between `setTimeout()` and `setInterval()`?](#what-is-the-difference-between-settimeout-and-setinterval)
- [Explain the concept of Debouncing and Throttling.](#explain-debouncing-and-throttling)

---


## Answers

### 1. JavaScript Basics

#### What are the different data types in JavaScript?
JavaScript has the following data types: `String`, `Number`, `Boolean`, `Undefined`, `Null`, `BigInt`, `Symbol`, and `Object`.

#### What is the difference between `==` and `===` in JavaScript?
`==` checks for value equality with type coercion, while `===` checks for both value and type equality without coercion.

#### What is the difference between `null` and `undefined`?
`null` is an intentional absence of value, while `undefined` means a variable has been declared but not assigned a value.

#### What is Hoisting?
Hoisting is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.

#### What is the Temporal Dead Zone?
The Temporal Dead Zone is the period between entering a scope and variable initialization, where `let` and `const` variables cannot be accessed.

#### What is Lexical Scope?
Lexical scope is the scope defined at the time of writing code, where a function's variables are accessible within the block in which it is defined.

### 2. Functions and Closures

#### What is the difference between function declaration and function expression?
A function declaration defines a named function, while a function expression assigns an anonymous or named function to a variable.

#### What are Closures?
Closures are functions that remember the environment in which they were created, allowing access to variables from an outer scope.

#### What is the `this` keyword in JavaScript, and how does it work?
`this` refers to the object context in which a function is executed. In regular functions, `this` depends on the calling object; in arrow functions, it inherits `this` from its lexical scope.

#### What is the difference between `call`, `apply`, and `bind`?
- `call`: Invokes a function with a specific `this` value and arguments provided individually.
- `apply`: Similar to `call`, but arguments are passed as an array.
- `bind`: Creates a new function with a bound `this` value and optional arguments for later invocation.

### 3. Promises and Asynchronous JavaScript

#### What is a Promise and Why is it Needed?
A Promise represents a value that may be available now, later, or never. It’s needed to handle asynchronous operations, making code easier to manage than callbacks.

#### What is Promise Chaining?
Promise chaining involves linking multiple `.then()` calls to handle asynchronous tasks sequentially.

#### What is `Promise.all`?
`Promise.all` waits for multiple promises to resolve and returns an array of results or rejects if any promise fails.

#### What is the Purpose of the `Promise.race` Method?
`Promise.race` returns the result of the first promise to resolve or reject in a list, enabling competition among promises.

#### What is async/await and How Does it Simplify Working with Promises?
`async/await` allows writing asynchronous code that looks synchronous. `await` pauses execution until a promise resolves, making code more readable.

#### What is a Callback Function and Why Do We Need Callbacks?
A callback is a function passed as an argument to another function, executed after the completion of an asynchronous operation. Callbacks manage tasks that need to occur only after other tasks complete.

#### What is Callback Hell?
Callback hell is a situation where callbacks are nested within other callbacks, making code difficult to read and maintain.

### 4. Event Handling

#### What are Events in JavaScript?
Events are actions or occurrences recognized by JavaScript, such as clicks, form submissions, and keystrokes, that can trigger specific code.

#### What is Event Flow?
Event flow describes the order in which events are handled in the DOM, including capturing and bubbling phases.

#### What is Event Bubbling?
Event bubbling is when an event starts from the deepest element and propagates up to the outer elements.

#### What is Event Capturing?
Event capturing, also known as "trickling," is the phase where an event moves from the outermost element to the target element.

#### What is the Event Loop?
The event loop is a mechanism that allows JavaScript to perform non-blocking operations by offloading tasks to the event queue and processing them sequentially in the call stack.

#### What is the Event Queue?
The event queue is a structure that holds asynchronous operations, sending them to the call stack once it’s empty.

### 5. Objects and Inheritance

#### How Do You Clone an Object in JavaScript?
An object can be cloned using `Object.assign({}, obj)`, spread syntax `{...obj}`, or `JSON.parse(JSON.stringify(obj))`.

#### Explain Prototypal Inheritance.
Prototypal inheritance allows objects to inherit properties and methods from other objects via the `prototype` chain.

### 6. JavaScript Operators and Expressions

#### What is the Spread Operator?
The spread operator (`...`) allows an iterable like an array to be expanded in places where arguments or elements are expected.

### 7. Timing Functions

#### What is the difference between `setTimeout()` and `setInterval()`?
- `setTimeout()` executes a function once after a specified delay.
- `setInterval()` repeatedly executes a function at specified intervals until stopped.

#### Explain the concept of Debouncing and Throttling.
- **Debouncing** delays function execution until after a specified time has elapsed since the last time the function was invoked, used to limit repeated actions like resizing.
- **Throttling** limits the frequency of function execution to once in a specified time, used in scenarios like scrolling to improve performance.


---

