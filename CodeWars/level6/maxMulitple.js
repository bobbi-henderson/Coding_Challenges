// Given a Divisor and a Bound , Find the largest integer N , Such That ,

// Conditions :
// N is divisible by divisor

// N is less than or equal to bound

// N is greater than 0.

function maxMultiple(divisor, bound){
    let answer = 0
    for(let n = bound; n>=divisor; n--){
      if(n%divisor===0){
        answer = n
        break
      }
    }
    return answer
  }