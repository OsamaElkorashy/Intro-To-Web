var str_val=window.prompt("Enter a Number ");
var num_val = parseInt(str_val);
switch (num_val)
{
	case 1:
	//alert("you Wotre 1");
	document.write("<h1>Bullet List</h1><ul><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ul><h4>Click Refresh (or Reload) to Run the Script again</h4>");
	break;
	
	case 2:
	//alert("you Wotre 2");
	document.write("<h1>Ordered List Numbers</h1><ol><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ol><h4>Click Refresh (or Reload) to Run the Script again</h4>");
	break;
	
	case 3:
	//alert("you Wotre 3");                    
	document.write("<h1>Ordered List Letters</h1><ol type=A><li>List Item 1</li><li>List Item 2</li><li>List Item 3</li></ol><h4>Click Refresh (or Reload) to Run the Script again</h4>");
	break;
	
	default :
	alert("Invalid Input");
}
