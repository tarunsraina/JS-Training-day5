
/* Friends A and B spent X dollars and Y rupees together , 
calculate the total amount they owe */

let rupees = "Rupees 250";
let dollars = "$170"

let dollarsInNum = getBalanceDollars(dollars);
let rupeesInNum = getBalanceRupees(rupees);

console.log("Total dollars spent is "+dollarsInNum);
console.log("Total rupees spent together is "+rupeesInNum);

let dollarsEachOwe = parseFloat(dollarsInNum/2);
let rupeesEachOwe = parseFloat(rupeesInNum/2);

console.log("Each Owe(dollars):"+dollarsEachOwe);
console.log("Each Owe(rupees):"+rupeesEachOwe);


function getBalanceDollars(str){
    return(parseFloat(str.replace("$","")))
}

function getBalanceRupees(str){
     let rup = str.split(" ")[1];
     return parseFloat(rup);
}