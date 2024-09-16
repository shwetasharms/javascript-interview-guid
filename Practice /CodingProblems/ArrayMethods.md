# JavaScript Array Methods

## Table of Contents
1. [Array.prototype.push()](#1-arrayprototypepush)
2. [Array.prototype.pop()](#2-arrayprototypepop)
3. [Array.prototype.shift()](#3-arrayprototypeshift)
4. [Array.prototype.unshift()](#4-arrayprototypeunshift)
5. [Array.prototype.map()](#5-arrayprototypemap)
6. [Array.prototype.filter()](#6-arrayprototypefilter)
7. [Array.prototype.reduce()](#7-arrayprototypereduce)
8. [Array.prototype.forEach()](#8-arrayprototypeforeach)
9. [Array.prototype.find()](#9-arrayprototypefind)
10. [Array.prototype.includes()](#10-arrayprototypeincludes)
11. [Array.prototype.some()](#11-arrayprototypesome)
12. [Array.prototype.every()](#12-arrayprototypeevery)
13. [Array.prototype.concat()](#13-arrayprototypeconcat)
14. [Array.prototype.slice()](#14-arrayprototypeslice)
15. [Array.prototype.splice()](#15-arrayprototypesplice)
16. [Array.prototype.indexOf()](#16-arrayprototypeindexof)
17. [Array.prototype.join()](#17-arrayprototypejoin)
18. [Array.prototype.reverse()](#18-arrayprototypereverse)
19. [Array.prototype.sort()](#19-arrayprototypesort)
20. [Array.prototype.flat()](#20-arrayprototypeflat)

---

## 1. Array.prototype.push()
- **Description**: Adds one or more elements to the end of an array.
- **Example**:

```javascript
const arr = [1, 2, 3];
arr.push(4);
console.log(arr); // [1, 2, 3, 4]
