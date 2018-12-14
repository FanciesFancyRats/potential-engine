function isPal(str){
//Takes an array and returns true if it is a palimndrone, else returns false
	if(str.length == 1 || str.length == 0){
		return(true);	
	}
	else{
		if(str[0] == str[str.length - 1]){
			swap = str.splice((str.length - 1), 1);
			swap = str.splice(0, 1);
			return(isPal(str));
		}
		return(false);
	}
}
function makeArray(number){
//Helper function, takes a number turns it into a string array
	number = String(number);
	number = number.split("");
	return(number);
}
largest = 0;
//Running nested for loops to sequencially work through all 3 digit products
//if it is a palimdrone and greater than current largest it updates
for(i = 999; i > 99; i--){
	for(j = 999; j > 99; j--){
		if(isPal(makeArray(j * i))){
			if((j * i) > largest){
				largest = (j * i);	
			}
		}
	}
}
console.log(largest);
