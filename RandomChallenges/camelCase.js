// Create a CamelCase Method where all words must have their first letter capitalized without spaces. // For instance: // "hello case" => "HelloCase" // "camel case word" => "CamelCaseWord"

function camelCase(str) {
    return str.split(" ")
              .map(e => e.charAt(0).toUpperCase() + e.slice(1).toLowerCase())
              .join('')
}