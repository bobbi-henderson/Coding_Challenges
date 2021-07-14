// Given a string, return a new string that has transformed based on the input:

// Change case of every character, ie. lower case to upper case, upper case to lower case.
// Reverse the order of words from the input.
// Note: You will have to handle multiple spaces, and leading/trailing spaces.

// For example:

// "Example Input" ==> "iNPUT eXAMPLE"
// You may assume the input only contain English alphabet and spaces.

//parameters - a mixed case string with potential leading/trailing spaces, multiple spaces in a row.

//return - retrune a string of the reversed word order with case switched for each character.

//examples

// psuedocode

function scrambleString(str) {
    return str.trim().split(/\s+/).reverse().map(e=>{return e.split('').map(char=> char.toLowerCase() === char ? char.toUpperCase() : char.toLowerCase()).join('')}).join(' ')
  }
  
  
  console.log(scrambleString('Example Input'), 'iNPUT eXAMPLE')
  
  console.log(scrambleString('  eXAMPLE  iNPUT '), 'Example Input')
  
  console.log(scrambleString('FiRsT  TrY! '), 'tRy! fIrSt')