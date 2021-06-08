// You are given a string of words (x), for each word within the string you need to turn the word 'inside out'. By this I mean the internal letters will move out, and the external letters move toward the centre.

// If the word is even length, all letters will move. If the length is odd, you are expected to leave the 'middle' letter of the word where it is.

// An example should clarify:

// 'taxi' would become 'atix' 'taxis' would become 'atxsi'

function insideOut(x){
    let xArr = x.split(' ').map((x,i)=>{
      if(x.length%2===0){
        let begin = x.slice(0,(x.length/2)).split('').reverse().join('')
        let end = x.slice(x.length/2).split('').reverse().join('')
        return begin+end
      } else if(x.length%2!==0 && x.length>3){
        let middle = x[(x.length-1)/2]
        let begin = x.slice(0, (x.length-1)/2).split('').reverse().join('')
        let end = x.slice(((x.length-1)/2)+1).split('').reverse().join('')
        return begin + middle + end
      } else {
        return x
      }
    })
    return xArr.join(' ')
  }