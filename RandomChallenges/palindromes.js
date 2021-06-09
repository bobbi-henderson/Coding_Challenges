// Palindromes
// A palindrome is a word, number, phrase, or another sequence of characters which
// reads the same backward as forward, such as madam, racecar, or the number

// What is the sum of all numeric palindromes that are less than 10,000?

function sumOfPalindromes(n){
    let validNums = []
    for(let i=1; i<n; i++){
      if(String(i)===String(i).split('').reverse().join('')){
        validNums.push(i)
      }
    }
    return validNums.reduce((acc,cur)=>{return acc+cur})
}

console.log(sumOfPalindromes(10000))