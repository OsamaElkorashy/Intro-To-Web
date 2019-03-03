//document.getElementById("first_occour").value = firstOccour;
function showResult()
{
	var myText = document.getElementById("txt_area").value;  // textArea
	var input  = document.getElementById("input").value;     // input
	var index  = document.getElementById("index").value;    // index
	var indexAsNum = parseInt(index);
	var firstOccour = myText.indexOf(input);
	var lastOccour = myText.lastIndexOf(input);
	
	var firstOccourIndex = myText.indexOf(input,indexAsNum);
	var lastOccourIndex = myText.lastIndexOf(input,indexAsNum);
	//alert(firstOccour);
	document.getElementById("first_occour").value = firstOccour;
	document.getElementById("last_occour").value = lastOccour;
	document.getElementById("first_occour_index").value = firstOccourIndex;
	document.getElementById("last_occour_index").value = lastOccourIndex;
	
}