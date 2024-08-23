# JavaScript Functions

Functions are one of the fundamental building blocks in JavaScript. This README explores various types of functions in JavaScript, providing explanations and examples for each.

## Table of Contents
1. [Named Function](#named-function)
2. [Anonymous Function](#anonymous-function)
3. [Arrow Function (ES6+)](#arrow-function-es6)
4. [Constructor Function](#constructor-function)
5. [Generator Function](#generator-function)
6. [Higher-Order Function](#higher-order-function)
7. [Immediately Invoked Function Expression (IIFE)](#immediately-invoked-function-expression-iife)
8. [Recursive Function](#recursive-function)
9. [Callback Function](#callback-function)
10. [Async Function (ES8+)](#async-function-es8)
11. [Method](#method)
12. [Closure](#closure)
13. [Pure Function](#pure-function)
14. [First-Class Function](#first-class-function)
15. [Currying Function](#currying-function)
16. [Composition Function](#composition-function)

---

## 1. Named Function

Named functions are functions that are declared with a name. They can be invoked using their name and are hoisted, meaning they can be called before they are defined in the code.

```javascript
function greet(name) {
    return `Hello, ${name}!`;
}

console.log(greet('Alice')); // Output: Hello, Alice!
```

[Back to Top](#table-of-contents)

---

## 2. Anonymous Function

Anonymous functions are functions without a name. They are typically used as arguments to other functions or assigned to a variable.

```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};

console.log(greet('Bob')); // Output: Hello, Bob!
```

[Back to Top](#table-of-contents)

---

## 3. Arrow Function (ES6+)

Arrow functions are a concise way to write functions in ES6. They do not have their own `this` context, making them particularly useful in certain situations like callbacks or in methods.

```javascript
const greet = (name) => `Hello, ${name}!`;

console.log(greet('Charlie')); // Output: Hello, Charlie!
```

[Back to Top](#table-of-contents)

---

## 4. Constructor Function

Constructor functions are used to create objects. When called with the `new` keyword, they create a new instance of an object.

```javascript
function Person(name, age) {
    this.name = name;
    this.age = age;
}

const person1 = new Person('David', 30);
console.log(person1.name); // Output: David
```

[Back to Top](#table-of-contents)

---

## 5. Generator Function

Generator functions are a special type of function that can be paused and resumed. They are defined using the `function*` syntax and use the `yield` keyword to pause execution.

```javascript
function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const numbers = numberGenerator();
console.log(numbers.next().value); // Output: 1
console.log(numbers.next().value); // Output: 2
console.log(numbers.next().value); // Output: 3
```

[Back to Top](#table-of-contents)

---

## 6. Higher-Order Function

A higher-order function is a function that takes another function as an argument or returns a function as a result. These functions are essential for functional programming in JavaScript.

```javascript
function add(a, b) {
    return a + b;
}

function higherOrderFunction(operation, x, y) {
    return operation(x, y);
}

console.log(higherOrderFunction(add, 5, 3)); // Output: 8
```

[Back to Top](#table-of-contents)

---

## 7. Immediately Invoked Function Expression (IIFE)

An IIFE is a function that is executed immediately after it is defined. This pattern is often used to create a private scope for variables.

```javascript
(function() {
    console.log('This function runs immediately!');
})();
```

[Back to Top](#table-of-contents)

---

## 8. Recursive Function

A recursive function is a function that calls itself. This technique is often used for tasks that can be broken down into similar subtasks, like calculating the factorial of a number.

```javascript
function factorial(n) {
    if (n === 0) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // Output: 120
```

[Back to Top](#table-of-contents)

---

## 9. Callback Function

A callback function is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

```javascript
function fetchData(callback) {
    // Simulate a data fetch
    setTimeout(() => {
        callback('Data received!');
    }, 2000);
}

fetchData(function(data) {
    console.log(data); // Output after 2 seconds: Data received!
});
```

[Back to Top](#table-of-contents)

---

## 10. Async Function (ES8+)

Async functions allow you to write asynchronous code in a synchronous-looking manner. They use the `async` keyword and work in conjunction with `await` to pause execution until a promise is resolved.

```javascript
async function fetchUserData() {
    const response = await fetch('https://api.example.com/user');
    const user = await response.json();
    return user;
}

fetchUserData().then(user => console.log(user));
```

[Back to Top](#table-of-contents)

---

## 11. Method

A method is a function that is a property of an object. Methods are typically used to operate on data contained within the object.

```javascript
const calculator = {
    add: function(a, b) {
        return a + b;
    }
};

console.log(calculator.add(2, 3)); // Output: 5
```

[Back to Top](#table-of-contents)

---

## 12. Closure

A closure is a function that retains access to its lexical scope even when the function is executed outside that scope. Closures are often used to create private variables.

```javascript
function counter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}

const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
```

[Back to Top](#table-of-contents)

---

## 13. Pure Function

A pure function is a function that, given the same input, will always return the same output and does not have any side effects (e.g., modifying external variables or states).

```javascript
function pureAdd(a, b) {
    return a + b;
}

console.log(pureAdd(2, 3)); // Output: 5
console.log(pureAdd(2, 3)); // Output: 5 (always the same output)
```

[Back to Top](#table-of-contents)

---

## 14. First-Class Function

In JavaScript, functions are first-class citizens, meaning they can be stored in variables, passed as arguments to other functions, and returned from other functions.

```javascript
const greet = function(name) {
    return `Hello, ${name}!`;
};

function callGreet(greetingFunction, name) {
    return greetingFunction(name);
}

console.log(callGreet(greet, 'Eve')); // Output: Hello, Eve!
```

[Back to Top](#table-of-contents)

---

## 15. Currying Function

Currying is a technique where a function takes multiple arguments one at a time and returns a new function that accepts the next argument.

```javascript
function multiply(a) {
    return function(b) {
        return a * b;
    };
}

const multiplyByTwo = multiply(2);
console.log(multiplyByTwo(5)); // Output: 10
```

[Back to Top](#table-of-contents)

---

## 16. Composition Function

Function composition is the process of combining two or more functions to produce a new function. It’s often used to create a pipeline of operations.

```javascript
const add = (x) => x + 1;
const multiply = (x) => x * 2;

const composedFunction = (x) => multiply(add(x));
console.log(composedFunction(5)); // Output: 12
```

[Back to Top](#table-of-contents)

---
