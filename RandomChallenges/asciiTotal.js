// Given the following quote by Alan Perlis

// “Dealing with failure is easy: Work hard to improve. Success is also easy to
// handle: You’ve solved the wrong problem. Work hard to improve.”

// Considering only the alphabetical characters, consonants having the value of
// their ASCII codes, and vowels having the inverse value of their ASCII codes,
// what is the sum of the sentence?

// Example:
// Using the phrase “why and how”, w=119, h=104, y=121, d=100, n=110. A and O are vowels, so a=-97 o=-111. The sum of ‘why and how’ = 569.

function sumOfQuote(quote){
    let total =0
    let vowels = 'aeiouAEIOU'
    let consonants = 'BCDFGHJKLMNPQRSTVWXYZbcdfghjklmnpqrstvwxyz'

    for(let i=0; i<quote.length; i++){
        if(vowels.includes(quote[i])){
            total -= quote.charCodeAt(i)
        } else if (consonants.includes(quote[i])) {
            total += quote.charCodeAt(i)
        }
    }

    return total
}

console.log(sumOfQuote('why and how'))

console.log(sumOfQuote('Dealing with failure is easy: Work hard to improve. Success is also easy to handle: You’ve solved the wrong problem. Work hard to improve.'))

