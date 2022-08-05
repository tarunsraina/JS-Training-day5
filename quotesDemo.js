

let str1 = "hello";  // double quotes
let str2 = 'hi';  // single quotes

// you can embed js code using backticks
let str3 = `${str1+" "+str2}, this is ding dong!`


console.log(str3)

let helmets = `
* Axor
* Steelbird
* Studs
`;

// if you want to write in multilines , use back quotes

console.log(helmets)

function reverseString(str){
    return str.split("").reverse().join("")
}

let strToRev = "Hellloooo"

console.log(`The string before reversing is ${strToRev}.
The string after reversing is ${reverseString(strToRev)}`)