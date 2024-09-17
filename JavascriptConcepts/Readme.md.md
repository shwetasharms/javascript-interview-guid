# JavaScript Mastery Guide

This guide covers fundamental and advanced JavaScript concepts essential for mastering the language and building modern web applications.

## Table of Contents
- [JavaScript Concepts](#javascript-concepts)
  - [Lexical Structure](#lexical-structure)
  - [Expressions](#expressions)
  - [Data Types](#data-types)
  - [Classes](#classes)
  - [Variables](#variables)
  - [Functions](#functions)
  - [this Keyword](#this-keyword)
  - [Arrow Functions](#arrow-functions)
  - [Loops](#loops)
  - [Scopes](#scopes)
  - [Arrays](#arrays)
  - [Template Literals](#template-literals)
  - [Destructuring](#destructuring)
  - [Modules](#modules)
  - [Error Handling](#error-handling)

---

## JavaScript Concepts

### Lexical Structure
JavaScript has a specific structure that defines how the code should be written, including whitespace, line breaks, and comments. Understanding how JavaScript interprets your code is fundamental.

### Expressions
Expressions in JavaScript represent any valid unit of code that can be evaluated to a value, including arithmetic, logical, and assignment expressions.

### Data Types
JavaScript has several data types, categorized into:
- **Primitive Types**: Number, String, Boolean, Null, Undefined, Symbol, BigInt.
- **Non-Primitive Types**: Object, Array, Function.

### Classes
Classes in JavaScript provide a blueprint for creating objects. They encapsulate data and functionality, supporting inheritance and encapsulation.

### Variables
JavaScript provides three ways to declare variables:
- `var` (function-scoped)
- `let` (block-scoped)
- `const` (block-scoped and immutable)

### Functions
Functions are one of the core building blocks in JavaScript. There are various types of functions:
- **Named Functions**
- **Anonymous Functions**
- **Arrow Functions**
- **Higher-Order Functions**
- **IIFE (Immediately Invoked Function Expressions)**

### this Keyword
The `this` keyword in JavaScript refers to the context in which a function is executed. It can be tricky, as its value can change depending on how the function is called.

### Arrow Functions
Arrow functions provide a shorthand syntax for writing functions. Unlike regular functions, arrow functions do not have their own `this` context, making them ideal for certain cases, such as callbacks.

### Loops
JavaScript provides several looping mechanisms:
- `for`
- `while`
- `do...while`
- `for...in`
- `for...of`

### Scopes
Scope determines the visibility of variables in JavaScript:
- **Global Scope**
- **Function Scope**
- **Block Scope**

### Arrays
Arrays are a type of object used to store multiple values in a single variable. JavaScript provides various array methods such as:
- `push()`
- `pop()`
- `map()`
- `filter()`
- `reduce()`

### Template Literals
Template literals allow for easier string interpolation and multi-line strings using backticks (`` ` ``).

### Destructuring
Destructuring syntax allows you to unpack values from arrays, or properties from objects, into distinct variables. This is a clean way to access data in complex structures.

```javascript
// Example:
const [a, b] = [1, 2];  // Destructuring arrays
const { name, age } = { name: 'John', age: 25 };  // Destructuring objects
