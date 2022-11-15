function cridetCalculate()
{
    var TruCridt, PayTime ;
    var monthpay, payallpayment;

    TruCridt = document.getElementById("Cridet_Catch").value;
    var list = document.getElementById("paymonth");
    PayTime = list.options[list.selectedIndex].value;

    if(PayTime == 12)
    {
        payallpayment=TruCridt*1.1;
    }
    else if(PayTime ==24)
    {
        payallpayment=TruCridt*1.2;
    }
    else if(PayTime ==36)
    {
        payallpayment=TruCridt*1.3;
    }
    else if(PayTime ==48)
    {
        payallpayment=TruCridt*1.4;
    }

   // payallpayment =TruCridt*1.1;
    monthpay =payallpayment/PayTime
    document.querySelector("#result").innerHTML =" all pay payment: "+ payallpayment + "<br>" +
     "month patment: " + monthpay.toFixed(3);
}