// Given a string of digits confirm whether the sum of all the individual even digits are greater than the sum of all the indiviudal odd digits. Always a string of numbers will be given.

// If the sum of even numbers is greater than the odd numbers return: "Even is greater than Odd"

// If the sum of odd numbers is greater than the sum of even numbers return: "Odd is greater than Even"

// If the total of both even and odd numbers are identical return: "Even and Odd are the same"

function evenOrOdd(str) {
    let evens = 0
    let odds = 0
    for(let i=0;i<str.length;i++){
      let num = parseInt(str[i])
      if(num%2===0){
        evens += num
      } else {
        odds += num
      }
    }
    return evens > odds ? 'Even is greater than Odd' : evens < odds ? 'Odd is greater than Even' : 'Even and Odd are the same'
}