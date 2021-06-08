// Your task, is to create NxN multiplication table, of size provided in parameter.

// for example, when given size is 3:

// 1 2 3
// 2 4 6
// 3 6 9
// for given example, the return value should be: [[1,2,3],[2,4,6],[3,6,9]]

multiplicationTable = function(size) {
    let answer = []
    
    let arr = Array.from({length: size}, (x, i) => i+1)
  
    for(let i=1; i<=size; i++){
      let row = arr.map((x)=>{return x*i})
      answer.push(row)
    }
    
    return answer
  }