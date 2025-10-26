1. Mutation vs Return
const arr = [1, 2, 3];
const result = arr.map(num => { num * 2 });
console.log(result);


👉 What’s logged and why?

Answer: [undefined, undefined, undefined] — missing return inside {}. Arrow functions with curly braces need explicit return.

2. Sparse Arrays in map
const arr = [1, , 3];
const result = arr.map(x => 10);
console.log(result.length, result);


👉 What happens to the “hole”?

Output: 3 [10, , 10] — map skips empty slots.
