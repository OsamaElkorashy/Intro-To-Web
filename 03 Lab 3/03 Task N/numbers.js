var num1=prompt("Enter a Number :");
while(isNaN(parseInt(num1)))
{
	num1=prompt("Enter a Number :");
}
var num2=prompt("Enter a Number :");
while(isNaN(parseInt(num2)))
{
	num2=prompt("Enter a Number :");
}
var num3=prompt("Enter a Number :");
while(isNaN(parseInt(num3)))
{
	num3=prompt("Enter a Number :");
}
document.write("First Number  "+num1+"<br/><br/>");
document.write("Second Number "+num2+"<br/><br/>");
document.write("Third Number  "+num3+"<br/><br/>");

var max =Math.max(num1,num2,num3);
var min =Math.min(num1,num2,num3);
document.write("Maximum Number  "+max+"<br/><br/>");
document.write("Minimum Number  "+min+"<br/><br/>");