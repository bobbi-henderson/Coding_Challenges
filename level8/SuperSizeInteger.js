// Write a function that rearranges an integer into its largest possible value.

function superSize(num){
    return parseInt(String(num).split('').map(x=>Number.parseInt(x)).sort((a,b)=>{return b-a}).join(''))
}