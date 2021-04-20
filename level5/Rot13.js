// ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

// Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
    let lower = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZABCDEFGHIJKLMNOPQRSTUVWXYZ'
    let messageArr = message.split('').map((x,i)=>{
      if(lower.includes(x)){
        return lower[lower.indexOf(x)+13]
      }else if(upper.includes(x)){
        return upper[upper.indexOf(x)+13]
      } else {
        return x
      }  
    })
    return messageArr.join('')
  }