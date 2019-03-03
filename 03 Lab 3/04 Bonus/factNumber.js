var i;
document.write("<table border=1 style='width:350px;'>");
for(i=0 ; i <11 ;i++)
{
    document.write("<tr><td>"+i+"</td><td>"+factorial(i)+"</td> </tr>");
}
document.write("</table>");

function factorial(number)
{
    if(number <= 1)
    {
        return 1;
    }
    else
    {
        return number * factorial(number-1);
    }
}

function FindFactorial()
{
    var number;
    do{
        number = prompt("Enter Number to get Factorial ");
        if(number<0)
        {
            alert("Please enter Positive Number ");
        }
    }
	while(number < 0);
    alert("Factorila of "+ number+"  = "+factorial(number));
}