// Given a sequence of integers, return the sum of all the integers that have an even index, multiplied by the integer at the last index.

// Indices in sequence start from 0.

// If the sequence is empty, you should return 0.

function evenLast(numbers) {
    let total = 0
    let multiplier = numbers[numbers.length-1]
    numbers.forEach((x,i)=>{
      if(i===0 || i%2===0){
        total+=x
      }
    })
    return total === 0 ? 0 : total*multiplier
  }