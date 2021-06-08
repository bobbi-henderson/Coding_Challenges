// Given a string as input, move all of its vowels to the end of the string, in the same order as they were before.

// Vowels are (in this kata): a, e, i, o, u

// Note: all provided input strings are lowercase.

// Examples
// "day"    ==>  "dya"
// "apple"  ==>  "pplae"

function moveVowel(input) {
    let c = []
    let v = []
    for(let i=0; i<input.length; i++){
      if('aeiou'.includes(input[i].toLowerCase())){
        v.push(input[i])
      } else {
        c.push(input[i])
      }
    }
    return c.join('') + v.join('')
}