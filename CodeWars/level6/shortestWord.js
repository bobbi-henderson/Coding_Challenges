//Return the length of the shortest word in the input string.
function findShort(s){
    return Math.min(...s.split(' ').map(x=>x.length))
  }