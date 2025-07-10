# JavaScript Interview Questions

---

### Q1: What are the different data types in JavaScript?

JavaScript defines eight fundamental data types, categorized into two main groups:

**Primitive Data Types** (single, immutable values):
- **String**
- **Number**
- **BigInt**
- **Boolean**
- **Undefined**
- **Null**
- **Symbol**
  
**Non-Primitive Data Type**:
- **Object**

---

### Q2: What is Hoisting?

Hoisting is a JavaScript concept where variable and function declarations are moved to the top of their scope before code execution.  
This allows functions and variables to be used before they are declared (as long as they are declared in the same scope).

---

### Q3: What is the difference between `null` and `undefined`?

- `null` is an assignment value that represents no value or an empty value.
- `undefined` means a variable has been declared but not assigned a value.

```javascript
var x;
console.log(x); // undefined

var y = null;
console.log(y); // null

```
---

### Q4: What is a Closure in JavaScript?
Closures are functions that have access to variables from an outer function even after the outer function has finished execution.
They remember the environment in which they were created.

javascript
Copy
Edit
function outer() {
    var outerVar = "Hello";
    function inner() {
        console.log(outerVar);
    }
    return inner;
}

var closureFn = outer();
closureFn(); // Output: Hello

---

### Q5: What is a Callback Function in JavaScript?
A callback function is a function passed as an argument to another function and is executed after the completion of that function.

---

### Q6: What is a Promise in JavaScript?
A Promise is an object representing the eventual completion or failure of an asynchronous operation.
It has three states: Pending, Fulfilled, and Rejected.
---
### Q7: What is setTimeout() in JavaScript?
setTimeout() is a built-in function used to delay the execution of code by a specified number of milliseconds.

javascript
Copy
Edit
setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);
---
### Q8: What is the purpose of async/await in JavaScript?
Async/await is syntax for writing asynchronous code that looks synchronous. It helps make asynchronous code easier to read and debug.
---
### Q9: Why do we use the debugger keyword in JavaScript?
The debugger keyword pauses the execution of JavaScript code and allows you to step through it line by line using debugging tools. It helps identify and fix errors more efficiently.
---
### Q10: What is the purpose of this keyword in JavaScript?
this refers to the object that is executing the current function or method. It allows access to the object’s properties and methods within the context of that object.
---
### Q11: What is Event Delegation in JavaScript?
Event delegation is a technique where a single event listener is attached to a parent element to handle events occurring on its child elements. It optimizes performance and reduces memory usage.
---
### Q12: What is Implicit Type Coercion in JavaScript?
Implicit type coercion refers to the automatic conversion of a value from one type to another. In JavaScript, the conversion follows a priority order: strings > numbers > booleans. For example, adding a string to a number coerces the number to a string.

console.log("5" + 2); // "52"
console.log("5" - 2); // 3
---
### Q13: Explain the concept of Prototypes in JavaScript
Every JavaScript object has a prototype. A prototype is another object from which it inherits properties and methods. This forms the prototype chain, enabling inheritance and code reuse.
---
### Q14: How can you clone an object in JavaScript?
Cloning can be done using:
Object.assign({}, obj)
{ ...obj } (spread operator)
JSON.parse(JSON.stringify(obj)) (deep copy, limitations apply)
---
### Q15: What is a Higher-Order Function in JavaScript?
A higher-order function is a function that takes another function as an argument, returns a function, or both. Examples: map, filter, reduce.
---
### Q16: What is the purpose of bind() in JavaScript?
Bind() creates a new function that, when called, has its this keyword set to the provided value.
---
### Q17: What are the different types of errors in JavaScript?
Syntax Error
Reference Error
Type Error
Range Error
Eval Error
URI Error
---
### Q18: What is Memoization in JavaScript?
Memoization is a caching technique used to speed up repeated function calls by storing the results of expensive function calls and returning the cached result when the same inputs occur again.
---
### Q19: What is Recursion in JavaScript?
Recursion is a technique where a function calls itself to solve smaller instances of the same problem until a base condition is met.
---
### Q20: What is the use of Constructor Function in JavaScript?
Constructor functions are used to create multiple instances of similar objects. They act as blueprints.

function Person(name) {
    this.name = name;
}
let p1 = new Person("John");
---
### Q21: What is a Callback Function in JavaScript?

A callback function is a function passed into another function to be executed later.
---
### Q22: What is the difference between Synchronous and Asynchronous programming?

Synchronous: Code executes line-by-line.
Asynchronous: Code can execute independently without blocking the thread.
---
### Q23: How do you handle errors in JavaScript?
By using try...catch blocks, throw, and handling rejected Promises using .catch() or async/await with try/catch.
---
### Q24: Explain Event Bubbling and Event Capturing in JavaScript
Event Bubbling: Event propagates from child to parent.
Event Capturing: Event propagates from parent to child.
You can control it using addEventListener(event, callback, useCapture).
---
### Q25: What is an Arrow Function in JavaScript?
Arrow functions are a concise way to write functions. They do not bind their own this.
const add = (a, b) => a + b;
---
### Q26: What is the use of localStorage and sessionStorage?
localStorage: Stores data with no expiration.
sessionStorage: Stores data until the tab is closed.
---
### Q27: Difference between slice() and splice() in JavaScript?
slice(): Returns a portion of an array without modifying it.
splice(): Modifies the array by adding/removing elements.
---
### Q28: Purpose of the reduce() function in JavaScript?
reduce() executes a reducer function on each array element to reduce it to a single value.
---
### Q29: What are the different events in JavaScript?
Examples include click, mouseover, keydown, submit, load, unload, etc.
---
### Q30: What are the different ways to access elements in JavaScript?
document.getElementById()
document.getElementsByClassName()
document.querySelector()
document.querySelectorAll()
---
### Q31: What is the scope of a variable in JavaScript?
Scope determines the accessibility of variables:
Global Scope
Function Scope
Block Scope (with let/const)
---
### Q32: What are the different ways to create objects in JavaScript?
Object literals
new Object()
Constructor functions
Object.create()
ES6 Classes
---
### Q33: What is the purpose of the window object in JavaScript?
The window object represents the browser window and provides global functions, properties, and browser interaction.
---
### Q34: What is async/await in JavaScript?
async/await provides a way to work with asynchronous code that looks synchronous, making it easier to write and understand.
