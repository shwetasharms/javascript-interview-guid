# JavaScript String Coding Questions

## Table of Contents
1. [Reverse a String](#1-reverse-a-string)
2. [Check if a String is a Palindrome](#2-check-if-a-string-is-a-palindrome)
3. [Count the Occurrences of a Character in a String](#3-count-the-occurrences-of-a-character-in-a-string)
4. [Find the First Non-Repeating Character in a String](#4-find-the-first-non-repeating-character-in-a-string)
5. [Check if Two Strings Are Anagrams](#5-check-if-two-strings-are-anagrams)
6. [Convert a String to Title Case](#6-convert-a-string-to-title-case)
7. [Check if a String Contains Only Digits](#7-check-if-a-string-contains-only-digits)
8. [Remove All Vowels from a String](#8-remove-all-vowels-from-a-string)
9. [Find the Longest Word in a Sentence](#9-find-the-longest-word-in-a-sentence)
10. [Check if a String Contains a Substring](#10-check-if-a-string-contains-a-substring)
11. [Replace All Occurrences of a Substring](#11-replace-all-occurrences-of-a-substring)
12. [Find the Length of the Longest Substring Without Repeating Characters](#12-find-the-length-of-the-longest-substring-without-repeating-characters)
13. [Remove Duplicate Characters in a String](#13-remove-duplicate-characters-in-a-string)
14. [Convert a String into an Array of Words](#14-convert-a-string-into-an-array-of-words)
15. [Check if a String Starts and Ends with the Same Character](#15-check-if-a-string-starts-and-ends-with-the-same-character)

---

## 1. Reverse a String
- **Problem**: Given a string, return the string in reverse order.
- **Input**: `"hello"`
- **Output**: `"olleh"`

```javascript
function reverseString(str) {
    return str.split('').reverse().join('');
}
