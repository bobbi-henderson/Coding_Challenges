//Write a function checkForImposterSyndrome(str) that returns true if str contains 'not ready' or "can't interview yet", otherwise false


const checkForImposterSyndrome = str => str.toLowerCase().includes('im not ready') || str.toLowerCase().includes("can't interview yet")



console.log(checkForImposterSyndrome('i wont be applying because im not ready'), true)

console.log(checkForImposterSyndrome('you are hired!'), false)

console.log(checkForImposterSyndrome('i am ready to apply for this job because I can interview now!'), false)