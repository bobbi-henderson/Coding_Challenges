//find the sum if you add all numbers between  and including the two inputs

function getSum( a,b ) {
    let count = 0 
    if(a>=b){
       for(let i=b; i<=a; i++){
         count+=i
       }
     } else {
       for(let i=a; i<=b; i++){
         count+=i
       }
     }
    return count
  }