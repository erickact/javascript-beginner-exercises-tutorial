function getColor(selection)
{
	switch(selection){
		case (selection = "red"):
		return true
		break;
		case (selection = "green"):
		return true
		break;
		case (selection = "blue"):
		return true
		break;
		// Add more options here
	    default:
	    	return false;  //returns false because the user picked an unavailable color
	    break;               
	}
}

let colorname = prompt('What color do you want?').trim();
let isAvailable = getColor(colorname);

if(isAvailable)
	console.log('Good news! That color is available');
else 
	console.log('We are sorry, that color is not available');
