// Given a variable n,

// If n is an integer, Return a string with dash'-'marks before and after each odd integer, but do not begin or end the string with a dash mark. If n is negative, then the negative sign should be removed.

// If n is not an integer, return an empty value.

// Ex:

// dashatize(274) -> '2-7-4'
// dashatize(6815) -> '68-1-5'

function dashatize(num) {
    let arr = String(num).replace(/-/g, '').split('')
    arr.forEach((x,i)=>{
      if(x%2!==0 && arr.length!==1 && Number(x)){
        if(i===0){
          arr[i] = x + '-'
        } else if(i===arr.length-1){
          arr[i]= '-' + x
        } else {
          arr[i]='-'+x+'-'
        }
      }
    })
    return arr.join('').replace(/--/g, '-')
  }