
// Given a positive integer n: 0 < n < 1e6, remove the last digit until you're left with a number that is a multiple of three.

// Return n if the input is already a multiple of three, and return null/nil/None if no such number exists.

const prevMultOfThree = n => {
    while(String(n).length > 1){
      if(n%3===0){
        return n
      } else {
        n = Number(String(n).slice(0,-1))
      }
    }
     return n%3===0 ? n : null
   }
