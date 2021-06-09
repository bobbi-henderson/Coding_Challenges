// In the range 1 - 13 (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13) the digit 1
// occurs 6 times.

// In the range, 1 - 2,660 (half the number of Romans in a legion), expressed in
// Roman numerals, how many times does the numeral “X” occur?

function romanize (num) {
    if (isNaN(num))
        return NaN;
    var digits = String(+num).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM",
               "","X","XX","XXX","XL","L","LX","LXX","LXXX","XC",
               "","I","II","III","IV","V","VI","VII","VIII","IX"],
        roman = "",
        i = 3;
    while (i--)
        roman = (key[+digits.pop() + (i * 10)] || "") + roman;
    return Array(+digits.join("") + 1).join("M") + roman;
}

function totalOccurences(num, find){
    let total = 0
    let key = []
    let no = []
    for(let i=1; i<=num; i++){
        if(romanize(i).match(/[X]/g)){
            total += romanize(i).match(/[X]/g).length
            key.push(romanize(i))
        } else {
            no.push(romanize(i))
        }
    }
    return [total, key, no]
}

console.log(totalOccurences(2660))