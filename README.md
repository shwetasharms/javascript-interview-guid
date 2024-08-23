
# JavaScript Interview Questions

## Questions

1. [What are the different data types in JavaScript?](#1-what-are-the-different-data-types-in-javascript)
2. [Explain the concept of hoisting in JavaScript.](#2-explain-the-concept-of-hoisting-in-javascript)
3. [What is the difference between `==` and `===` in JavaScript?](#3-what-is-the-difference-between--and--in-javascript)
4. [What is a closure in JavaScript?](#4-what-is-a-closure-in-javascript)
5. [What is the difference between `function declaration` and `function expression`?](#5-what-is-the-difference-between-function-declaration-and-function-expression)
6. [What is the `this` keyword in JavaScript, and how does it work?](#6-what-is-the-this-keyword-in-javascript-and-how-does-it-work)
7. [How do you clone an object in JavaScript?](#7-how-do-you-clone-an-object-in-javascript)
8. [What is the difference between `null` and `undefined`?](#8-what-is-the-difference-between-null-and-undefined)
9. [Explain the concept of prototypal inheritance.](#9-explain-the-concept-of-prototypal-inheritance)
10. [What is the difference between `setTimeout()` and `setInterval()`?](#10-what-is-the-difference-between-settimeout-and-setinterval)
11. [What is a Promise, and how does it work?](#11-what-is-a-promise-and-how-does-it-work)
12. [What is async/await and how does it simplify working with Promises?](#12-what-is-asyncawait-and-how-does-it-simplify-working-with-promises)
13. [What is the event loop in JavaScript?](#13-what-is-the-event-loop-in-javascript)
14. [Explain the concept of debouncing and throttling.](#14-explain-the-concept-of-debouncing-and-throttling)

---

## Answers

### 1. What are the different data types in JavaScript?
JavaScript has the following data types:
- **Primitive types**: `String`, `Number`, `Boolean`, `Null`, `Undefined`, `Symbol`, `BigInt`
- **Non-primitive types**: `Object` (including Arrays, Functions, etc.)

[Back to top](#questions)

### 2. Explain the concept of hoisting in JavaScript.
Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their scope before code execution.

[Back to top](#questions)

### 3. What is the difference between `==` and `===` in JavaScript?
- `==` checks for equality after type coercion.
- `===` checks for equality without type coercion.

[Back to top](#questions)

### 4. What is a closure in JavaScript?
A closure is a function that has access to its own scope, the scope of the outer function, and the global scope.

[Back to top](#questions)

### 5. What is the difference between `function declaration` and `function expression`?
- **Function Declaration**: Declares a function and hoists it to the top of its scope.
- **Function Expression**: Creates a function that can be stored in a variable and is not hoisted.

[Back to top](#questions)

### 6. What is the `this` keyword in JavaScript, and how does it work?
The `this` keyword refers to the object it belongs to and can change depending on the context in which it's used.

[Back to top](#questions)

### 7. How do you clone an object in JavaScript?
You can clone an object using `Object.assign()` or the spread operator (`...`).

[Back to top](#questions)

### 8. What is the difference between `null` and `undefined`?
- `null` is an assignment value that represents no value.
- `undefined` means a variable has been declared but not yet assigned a value.

[Back to top](#questions)

### 9. Explain the concept of prototypal inheritance.
Prototypal inheritance is a feature in JavaScript where objects can inherit properties and methods from other objects.

[Back to top](#questions)

### 10. What is the difference between `setTimeout()` and `setInterval()`?
- `setTimeout()` executes a function after a specified delay.
- `setInterval()` repeatedly executes a function with a fixed time delay between each call.

[Back to top](#questions)

### 11. What is a Promise, and how does it work?
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

[Back to top](#questions)

### 12. What is async/await and how does it simplify working with Promises?
`async/await` syntax allows you to write asynchronous code that looks synchronous, making it easier to read and maintain.

[Back to top](#questions)

### 13. What is the event loop in JavaScript?
The event loop is a mechanism that handles the execution of multiple chunks of your code, enabling asynchronous programming in JavaScript.

[Back to top](#questions)

### 14. Explain the concept of debouncing and throttling.
- **Debouncing**: Ensures that a function is called only once after a certain period of time has passed since the last call.
- **Throttling**: Ensures that a function is called at most once in a specified period.

[Back to top](#questions)

