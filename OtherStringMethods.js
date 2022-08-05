
/* check if the message is requesting payment and validate mobile number and gmail

valid mobile number should begin with +91  and valid email should end with "@gmail.com" 
*/


let paymentDeatils = {

    receivedMsg : "This is to inform that your payment is pending please pay it",
    mobile : "+91 9878822243",
    gmail : "akash@gmail.com"

}

let paymentPending = false;
let isPhonevalid = false;
let isEmailValid = false;

if(paymentDeatils.receivedMsg.includes("payment is pending")){
    paymentPending = true;
}

if(paymentDeatils.mobile.startsWith("+91")){
    isPhonevalid = true;
}

if(paymentDeatils.gmail.endsWith("@gmail.com")){
    isEmailValid = true;
}

let finalMsg="";

if(paymentPending){
    finalMsg+="Payment is pending | "
}else{
    finalMsg+="No payment is pending"
}

if(isEmailValid){
    finalMsg+="Email is valid |"
}else{
    finalMsg+="Email is not valid |"
}

if(isPhonevalid){
    finalMsg+=" Phone is valid."
}else{
    finalMsg+=" Phone is not valid."
}

console.log(finalMsg)