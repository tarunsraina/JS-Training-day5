

let msgs = ["buy this ..","free ..","discount of ..","the man","cat was ..","sale .."]


msgs.forEach((message)=>{
    if(message.includes("buy")
    || (message.includes("free"))
    || (message.includes("sale"))
    || (message.includes("discount"))){
        console.log("This is the spam message , please ignore.");
        console.log(message)
    }
})