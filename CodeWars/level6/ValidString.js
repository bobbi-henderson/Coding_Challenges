// You are given a sequence of valid words and a string. Test if the string is made up by one or more words from the array.

// Task
// Return true if each character of the string is part of a substring that matches any of the words in the dictionary, false otherwise.

// For example:

// string[] dictionary = ["code", "wars"]; 

// string s = "codewars"; // true -> match 'code', 'wars'

// string s1 = "codewar"; // false -> match 'code', unmatched 'war'

var validWord = function(dictionary, word) {
    let r = new RegExp('^(' + dictionary.join('|') + ')+$');
    return r.test(word);
}

console.log(validWord(['code', 'wars'], 'codewars'))
console.log(validWord(['code', 'war'], 'codewars'))