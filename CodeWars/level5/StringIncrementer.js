// Your job is to write a function which increments a string, to create a new string.

// If the string already ends with a number, the number should be incremented by 1.
// If the string does not end with a number. the number 1 should be appended to the new string.
// Examples:

// foo -> foo1

// foobar23 -> foobar24

// foo0042 -> foo0043

// foo9 -> foo10

// foo099 -> foo100

// Attention: If the number has leading zeros the amount of digits should be considered.

function incrementString (strng) {
    // return incrementedString
    let strArr = strng.split(/(\d+)/);
    if(!strArr[1]){
      strArr[1] = '1'
    } else if(strArr[1].length == 1){
      strArr[1] = parseInt(strArr[1]) +1
    } else if(strArr[1].length >= 1){
      let numLength = strArr[1].length
      let newNum = (parseInt(strArr[1]) + 1).toString()
      if(newNum.length < numLength){
        for(let i=(numLength - newNum.length); i>0; i--){
          newNum = '0' + newNum
        }
      }
      strArr[1] = newNum
    }
    return strArr.join('')
  }