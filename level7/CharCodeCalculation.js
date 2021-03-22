// Given a string, turn each character into its ASCII character code and join them together to create a number - let's call this number total1:

// 'ABC' --> 'A' = 65, 'B' = 66, 'C' = 67 --> 656667
// Then replace any incidence of the number 7 with the number 1, and call this number 'total2':

// total1 = 656667
//               ^
// total2 = 656661
//               ^
// Then return the difference between the sum of the digits in total1 and total2:

//   (6 + 5 + 6 + 6 + 6 + 7)
// - (6 + 5 + 6 + 6 + 6 + 1)
// -------------------------
//                        6


function calc(x){
    let charCodes = ''
    
    for(let i=0; i<x.length; i++){
      charCodes += x.charCodeAt(i)
    }
    
    let split = charCodes.split('')
    let noSeven = split.map(x => {
        if(x==='7'){
          return '1'
        } else {
          return x
        }
      })
    
    function sumArr(array) {
      let total = 0
      array.forEach(num=>{total+=parseInt(num)})
      return total
    }
    
    let total1 = sumArr(split)
    let total2 = sumArr(noSeven)
    
    return total1-total2
 }