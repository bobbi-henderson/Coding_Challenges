function sumOfOddinFib(num){
    let n1 = 0, n2 = 1, nextTerm;
    let fib = []

    while (n1 < num) {
        if(n1%2!==0){
            fib.push(n1)
        }
        nextTerm = n1 + n2;
        n1 = n2;
        n2 = nextTerm;
    }

    return fib.reduce((acc,cur)=>{return acc+cur})
}

console.log(sumOfOddinFib(10000))