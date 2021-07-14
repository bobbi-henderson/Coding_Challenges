// Create a CamelCase Method where all words must have their first letter capitalized without spaces. // For instance: // "hello case" => "HelloCase" // "camel case word" => "CamelCaseWord"

//parameters - a string that only contains words, separated by single spaces, puncuation stays appended to last word

//returns - a string that contains no spaces with the first letter of each word capitalized


function camelCase(str) {
    return str.split(" ")
              .map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
              .join('')
}