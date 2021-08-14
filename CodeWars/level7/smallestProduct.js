// Given a non-empty array of non-empty integer arrays, multiply the contents of each nested array and return the smallest total.

function smallestProduct(arr) {
    return arr.map((x)=>{return x.reduce((a,c)=>{return a*c})}).sort((a,b)=>a-b)[0]
}
 