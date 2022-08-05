
/*  given MM/YY format , print this in this format,

  input : 05/28    output : may - 2028

  input : 06/21    output : june - 2021

  */

  let monthDict = {

    "01":"January",
    "02":"February",
    "03":"March",
    "04":"April",
    "05":"May",
    "06":"June",
    "07":"July",
    "08":"August",
    "09":"September",
    "10":"October",
    "11":"November",
    "12":"December"

  }


  let exp = "02/28"

  let month = exp.split('/')[0];
  let year = exp.split('/')[1];

  console.log(monthDict[month]+" - 20"+year);