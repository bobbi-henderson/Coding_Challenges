// Given two arrays of strings, return the number of times each string of the second array appears in the first array.

// Example
// array1 = ['abc', 'abc', 'xyz', 'cde', 'uvw']
// array2 = ['abc', 'cde', 'uap']



//Parameters - will be given an array of strings
//Return - will return an array of integers
//Examples - see console logs

const countOccurences = (arr1,arr2) =>{
    return arr2.map(e=> arr1.filter(x=>x===e).length)
  }
  
   console.log(countOccurences(['abc', 'abc','xyz','abcd','cde'], ['abc', 'cde', 'uap']), [2, 1, 0]);
   console.log(countOccurences(['abc', 'xyz','abc', 'xyz','cde'], ['abc', 'cde', 'xyz']), [2, 1, 2]);
   console.log(countOccurences(['quick', 'brown', 'fox', 'is', 'quick'], ['quick', 'abc', 'fox']), [2, 0, 1]);