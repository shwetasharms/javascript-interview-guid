Q1- Write a function that check the string first character and last character are equal or not if it is equal then return true else return false
ANs- function checkChars(s) {
    return (s.charAt(0) === s.charAt(s.length-1)) ? true : false
}
OR 
const checkChars = s => s[0] === s.at(-1);

Q2- what is difference between  chartAT() and at() 
The charAt() and at() methods in JavaScript both retrieve a character from a string at a specified index, but they differ primarily in their handling of negative indices and their return value for out-of-bounds access. 
1. Negative Indices: 

• charAt(): This method does not support negative indices. If a negative index is provided, it returns an empty string (""). 
• at(): This method supports negative indices, which count from the end of the string. For example, myString.at(-1) returns the last character, myString.at(-2) returns the second-to-last character, and so on. 

2. Out-of-Bounds Access: 

• charAt(): If the provided index is greater than or equal to the string's length, charAt() returns an empty string (""). 
• at(): If the provided index (positive or negative) falls outside the valid range of the string, at() returns undefined. 

3. Browser Support: 

• charAt(): This method has been part of JavaScript for a long time and enjoys widespread support across all modern and older browsers. 
• at(): This is a newer addition to JavaScript (introduced with ES2022) and might not be supported in very old browser versions. 

4. Applicability: 

• charAt(): Exclusively for strings. 
• at(): Can be used with both strings and arrays, providing a consistent way to access elements by index, including negative indexing. 

In summary: 

• Use at() for more concise and readable code, especially when dealing with negative indices or when working with both strings and arrays. 
• Consider charAt() if you need to ensure compatibility with very old browser environments where at() might not be available. 

AI responses may include mistakes.

Q3- Write a function to round off the number 
Ans- Use the toFixed() methods 

