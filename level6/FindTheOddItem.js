// Given an array of integers, find the one that appears an odd number of times.

// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
    let count = {}
    let odd = 0
    
    A.forEach((num)=>{
      count[num] = count[num]+1 || 1
    })
    
    A.forEach((num)=>{
      if(count[num]%2!==0){
        odd = num
      }
    })
    
    return odd
  }