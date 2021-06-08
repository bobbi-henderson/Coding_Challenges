// You are given a secret message you need to decipher. Here are the things you need to know to decipher it:

// For each word:

// the second and the last letter is switched (e.g. Hello becomes Holle)
// the first letter is replaced by its character code (e.g. H becomes 72)
// Note: there are no special characters used, only letters and spaces

// Examples

// decipherThis('72olle 103doo 100ya'); // 'Hello good day'
// decipherThis('82yade 115te 103o'); // 'Ready set go'

function decipherThis(str) {
    let arr = str.replace(/\d+/g, (match)=>{return String.fromCharCode(match)}).split(' ')
    return arr.map((x)=>{if(x.length > 2){return x[0] + x[x.length-1] + x.slice(2,(x.length-1)) + x[1]}else{return x}}).join(' ')
  }; 