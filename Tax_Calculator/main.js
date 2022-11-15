function Years(){

    var history = new Date();
    var year=history.getFullYear();
    for(var i=year; i>=2000;i--)
    {
        var selectYear=document.createElement("option");
        document.getElementById("carYear").options.add(selectYear);
        selectYear.value=i;
        selectYear.text=i;
    }
}



function taxCalculator()
{
    var carType , carPower, carYear;
    var taxPayment;
    var i;


                   //1.  select by car type 

    for(i =0;i <document.getElementById("carType").length; i++ )
    {
        if(document.getElementById("carType").options[i].selected)
        {
            carType=document.getElementById("carType")[i].value;
        }
        else if(document.getElementById("carType").options[i].selected)
        {
            carType=document.getElementById("carType").options[i].value;
        }
        console.log(carType);
    }

         // 2. select by  car power 

    for(i =0;i <document.getElementsByName("carPower").length; i++ )
    {
        if(document.getElementsByName("carPower")[i].checked)
        {
            carPower=document.getElementsByName("carPower")[i].value;
        }
        
        console.log(carPower);
    }

    // 3.select car by year 

    for(i =0;i <document.getElementById("carYear").length; i++ )
    {
        if(document.getElementById("carYear").options[i].selected)
        {
            carYear=document.getElementById("carYear")[i].value;
        }
        console.log(carYear)
    }


                   
     // 1. control area   by select car type             

    if(carType=="motor")
    {
        taxPayment=100;
    }
    else if(carType=="car")
    {
        taxPayment=200;
    }

    // 2. control by car power 
    if(carPower=="1000~1600cc")
    {
        taxPayment = taxPayment + 50;
    }
    else if(carPower=="1601~2000cc")
    {
        taxPayment = taxPayment + 100;
    }
    else if(carPower=="over 2001cc")
    {
        taxPayment = taxPayment + 150;
    }

  //   3. control area  discount  car by yaer
  if(carYear<=2010)
  {
    taxPayment = taxPayment -25;
  }

    document.getElementById("result").innerHTML="need taxpayment: " + taxPayment;

}
