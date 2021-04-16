// Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

// domainName("http://github.com/carbonfive/raygun") == "github" 
// domainName("http://www.zombie-bites.com") == "zombie-bites"
// domainName("https://www.cnet.com") == "cnet"

function domainName(url){
    let split1 = url.split('.')
    let split2 = []
    let domain = ''
    if(split1[0].includes('//')){
      split2 = split1[0].split('//')
    } 
    
    if(split2.length === 0){
      split1.forEach((x,i)=>{
        if(x==='www'){
          domain = split1[i+1]
        } else if (i===0) {
          domain = x
        }
      })
    }
    
    split2.forEach((x,i)=>{
      if(x === 'http:' || x === 'https:' && x !== 'www'){
        if(split2[i+1] !== 'www'){
          domain = split2[i+1]
        } 
      } else if (x === 'www'){
        domain = split2[i+1]
      } else if (i === 0) {
        domain = x
      }
    })
    
    return domain || split1[1]
  }