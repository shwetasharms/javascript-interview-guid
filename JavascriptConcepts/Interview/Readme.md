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


### Q5: What is a Callback Function in JavaScript?
A callback function is a function passed as an argument to another function and is executed after the completion of that function.
### Q6: What is a Promise in JavaScript?
A Promise is an object representing the eventual completion or failure of an asynchronous operation.
It has three states: Pending, Fulfilled, and Rejected.
### Q7: What is setTimeout() in JavaScript?
setTimeout() is a built-in function used to delay the execution of code by a specified number of milliseconds.

javascript
Copy
Edit
setTimeout(function () {
    console.log("Executed after 2 seconds");
}, 2000);
### Q8: What is the purpose of async/await in JavaScript?
async/await is syntax for writing asynchronous code that looks synchronous.
It helps make asynchronous code easier to read and debug.
### Q9: Why do we use the debugger keyword in JavaScript?
The debugger keyword pauses the execution of JavaScript code and allows you to step through it line by line using debugging tools.
It helps identify and fix errors more efficiently.
Q10- What is the purpose of this keyword in javascript 
Ans- This keyword refer  to the object  that is executing the current functionor methods 
It alow access to the object property and methods  within the context of that object

Q11- What si event delegation in javascript ?
Ans- Event delegation is the techniques where you attached  a single event listnerto a parent element  and that event listner handles events occuring on its child element. It help optimize performance and reduce memory consumption.

Q12- What is implicity type coercion in Javascript ?
Ans- Implicit type coercion is a Javascript concept that refers to that  automatic conversion of a value from one type to another . In Javascript this conversion follows a priopity order that typically begins with  strings, then numbers and finaly Booleans , If you try to add  a string  to a number, Javascript will implicity coerce the number to a string before performngthe addition operation because strings have the highst priority in type coercion.

Q13-




     
