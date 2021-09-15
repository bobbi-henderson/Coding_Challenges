function findSum(n) {
    let arr = []
    for(let x=3; x<=n; x++){
      if(x%3===0 || x%5===0){
        arr.push(x)
      }
    }
    return arr.reduce((a,c)=>a+c);
  }