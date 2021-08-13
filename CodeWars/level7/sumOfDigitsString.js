// It involves implementing a program that sums the digits of a non-negative integer. For example, the sum of 3433 digits is 13.

// Digits can be a number or a string, and you should control it is no undefined and return an empty string.
// Digits can be a number or a string, and you should ensure it is not None and return an empty string.
// To give you a little more excitement, the program will not only write the result of the sum, but also write all the sums used: 3 + 4 + 3 + 3 = 13.

function sum(digits) {
    if(typeof digits === 'string' ){
      return `${digits.split('').join(' + ')} = ${digits.split('').map(x=>Number(x)).reduce((a,c)=>{return a+c})}`
    } else if (typeof digits === 'number'){
      return `${String(digits).split('').join(' + ')} = ${String(digits).split('').map(x=>Number(x)).reduce((a,c)=>{return a+c})}`
    } else {
      return ''
    }
   }