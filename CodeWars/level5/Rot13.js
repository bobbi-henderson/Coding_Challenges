// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(str) {
  let lower = 'abcdefghijklmnopqrstuvwxyzabcdefghijklm'
  let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLM'
  return str.split('').map(x=>{
    if(upper.includes(x)){
      let index = upper.indexOf(x) + 13
      return upper[index]
    } else if(lower.includes(x)){
      let index = lower.indexOf(x) + 13
      return lower[index]
    } else {
      return x
    }
  }).join('')
}

console.log(rot13("EBG13 rknzcyr."))
console.log(rot13("This is my first ROT13 excercise!"))
console.log(rot13("otimq"))