// Given a mixed array of number and string representations of integers, add up the string integers and subtract this from the total of the non-string integers.

// Return as a number.

function divCon(x){
    let stringInts = 0
    let nonStringInts = 0
    x.forEach((num,i)=>{
      if(typeof num === 'string'){
        stringInts += parseInt(num)   
      } else {
        nonStringInts += num
      }
    })
    
    return nonStringInts - stringInts
}