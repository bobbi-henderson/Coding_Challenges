// Given a string of words, you need to find the highest scoring word.

// Each letter of a word scores points according to its position in the alphabet: a = 1, b = 2, c = 3 etc.

// You need to return the highest scoring word as a string.

// If two words score the same, return the word that appears earliest in the original string.

// All letters will be lowercase and all inputs will be valid.


function high(x){
    let alpha = 'abcdefghijklmnopqrstuvwxyz'
    let highest = ''
    
    x.split(' ').forEach((word)=>{
        let total = 0
        let highestTotal = 0
        for(let i=0; i<word.length; i++){
          total += alpha.indexOf(word[i]) + 1
        }
        for(let i=0; i<highest.length; i++){
          highestTotal += alpha.indexOf(highest[i]) + 1
        }
        if(total > highestTotal){
          highest = word
        }
    })
    
    return highest
  }