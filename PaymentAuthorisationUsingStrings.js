/* demo of string length method 

  check if user has valid card and valid cvv 

  valid card has 16 digits and a valid cvv has 3 digits 
  
  and check what type of card is being used

  and use capital letters for CARDHOLDER
  
  VISA - STARTS WITH 4
  MASTERCARD - STARTS WITH 5

  and DISPLAY A AUTH CODE

  */

  let userDetails = {

    cardholder : "varun",
    card : "5111111111111111",
    cvv : "728"
  }

  let hasValidDetails = false;
  let visaCard = false;
  let masterCard = false;

  if(userDetails.card.charAt(0)=='4'){
    visaCard = true;
  }else if(userDetails.card.charAt(0)=='5'){
    masterCard = true
  }

  if(userDetails.card.length==16 && userDetails.cvv.length==3){
    hasValidDetails = true;
  }

  if(hasValidDetails){
    console.log("Initiating payment with card holder name "+userDetails.cardholder.toUpperCase())
    if(visaCard || masterCard){
        console.log("Paying with "+(visaCard?"visa card :)":"mastercard :)"));
    }else{
        console.log("Paying with unknown card")
    }

    let codeStr= "Your auth code:"+parseInt(Math.random()*50000);
    console.log(codeStr);
    if (~codeStr.indexOf("code:")) {
      console.log("code found!!");
    }
    let codeIndex = codeStr.indexOf("code:")
    let code = codeStr.substring(codeIndex+5);
    console.log("Extracting only auth code from authcode string....")
    console.log(code)
  }else{
    console.log("Please check your card details :/")
  }