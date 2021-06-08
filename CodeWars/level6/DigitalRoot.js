// Digital root is the recursive sum of all the digits in a number.

// Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.

function digital_root(n) {
    let arr = String(n).split('')
    
    while(arr.length > 1){
      let total = arr.map((x)=>{return parseInt(x)}).reduce((a,c)=>{return a+c})
      arr = String(total).split('')
    }
    
    return parseInt(arr[0])
  }