// Strongest group
// Given a string containing upper case and lower case alphabets and an integer K. The closeness score of a continuous substring is defined as the number of distinct characters in the substring. Find the minimum closeness score of all the contiguous substrings with size K.

// ex- abcde has following substrings of size 3-> abc, bcd, cde

// [Note- smaller case and upper case alphabets should be treated as distinct characters]
// Example
// Input:

// 10 7

// vKVXcoXAtA

// Output:

// 5

// Explanation:

// the substrings are

// vKVXcoX-> 6 distinct characters

// KVXcoXA-> 6 distinct characters

// VXcoXAt-> 6 distinct characters

// XcoXAtA-> 5 distinct characters
let inp = readLine().split(" ")
let size = parseInt(inp[0])
let k = parseInt(inp[1])
