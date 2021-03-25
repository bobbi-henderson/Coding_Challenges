// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function olympicRing(a){
    let ringLetters = "AabDdegOoPpQqR"
    let count = 0
    
    for(let i=0; i<a.length; i++){
      if(a[i]==='B'){
        count += 2
      } else if (ringLetters.includes(a[i])){
        count ++
      }
    }
    
    let total = count/2
    
    return total > 3 ? 'Gold!' : total > 2 ? 'Silver!' : total > 1 ? 'Bronze!' : 'Not even a medal!'
}