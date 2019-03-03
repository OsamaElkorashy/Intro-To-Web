//document.getElementById("first_occour").value = firstOccour;
function showResult()
{
	var myText = document.getElementById("mytext").value;
	var mysplit = document.getElementById("mysplit").value;
	var strings=myText.split(mysplit);
	
	document.getElementById("output").value = strings.join("\n");
	
}