// Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// parameters - two strings, containing only letters

//returns - one string, with all lower case letters and no duplicate letters

//example

//psuedocode

const longestPossible = (a,b) => Array.from(new Set(a.concat(b).split('').sort())).join('')

console.log(longestPossible("xyaabbbccccdefww", "xxxxyyyyabklmopq"), "abcdefklmopqwxy")

console.log(longestPossible("abcdefghijklmnopqrstuvwxyz", "abcdefghijklmnopqrstuvwxyz"), "abcdefghijklmnopqrstuvwxyz")

console.log(longestPossible("abc", "ddd"), "abcd")