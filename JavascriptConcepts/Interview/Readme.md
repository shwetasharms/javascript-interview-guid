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


Q4- Clouser in Javascript 
Ans - Clouser are the functionn that have access  to varibaled from n outer functionven after the outr function has finishe execution . They remember  the environment in which they were created 
function outer(){
var outerVar = "HEllo"
function innner(){
console.log(outerVar)
}
return inner
}
 var clouserFn= outer();
clouserFn()


Q5- Callback function in javascript 
Q6- Promise in Javascript 
Q7- SetTimeout() function in javascript
Q8- Purpose of asyn await in javascript 
Q9 - Why do we use word "debugger" in javascript 
Ans- The word "debugger" is used in the Javascript  to refer to  tool that can be used to step throught avascript code line by line .
This can be helpfull for debugging Javascipt code  which is e processf finding nd fixing the errors in the javascript 
Q10- What is the purpose of this keyword in javascript 
Ans- This keyword refer  to the object  that is executing the current functionor methods 
It alow access to the object property and methods  within the context of that object

Q11- What si event delegation in javascript ?
Ans- Event delegation is the techniques where you attached  a single event listnerto a parent element  and that event listner handles events occuring on its child element. It help optimize performance and reduce memory consumption.

Q12- What is implicity type coercion in Javascript ?
Ans- Implicit type coercion is a Javascript concept that refers to that  automatic conversion of a value from one type to another . In Javascript this conversion follows a priopity order that typically begins with  strings, then numbers and finaly Booleans , If you try to add  a string  to a number, Javascript will implicity coerce the number to a string before performngthe addition operation because strings have the highst priority in type coercion.

Q13-




     
