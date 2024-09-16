# JavaScript Array Methods

## Table of Contents
1. [Array.push()](#1-arrayprototypepush)
2. [Array.pop()](#2-arrayprototypepop)
3. [Array.shift()](#3-arrayprototypeshift)
4. [Array.unshift()](#4-arrayprototypeunshift)
5. [Array.map()](#5-arrayprototypemap)
6. [Array.filter()](#6-arrayprototypefilter)
7. [Array.reduce()](#7-arrayprototypereduce)
8. [Array.forEach()](#8-arrayprototypeforeach)
9. [Array.find()](#9-arrayprototypefind)
10. [Array.includes()](#10-arrayprototypeincludes)
11. [Array.some()](#11-arrayprototypesome)
12. [Array.every()](#12-arrayprototypeevery)
13. [Array.concat()](#13-arrayprototypeconcat)
14. [Array.slice()](#14-arrayprototypeslice)
15. [Array.splice()](#15-arrayprototypesplice)
16. [Array.indexOf()](#16-arrayprototypeindexof)
17. [Array.join()](#17-arrayprototypejoin)
18. [Array.reverse()](#18-arrayprototypereverse)
19. [Array.sort()](#19-arrayprototypesort)
20. [Array.flat()](#20-arrayprototypeflat)

---

## 1. Array.push()
- **Description**: Adds one or more elements to the end of an array.
- **Example**:

```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
```
---
## 2. Array.pop()
- **Description**: Removes the last element from an array and returns that element.
- **Example**:

```javascript
const arr = [1, 2, 3];
const lastElement = arr.pop();
console.log(lastElement); // 3
console.log(arr); // [1, 2]
