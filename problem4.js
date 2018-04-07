unsolved = false;
var x = 777;
var y = 999;

while(unsolved){
	
}
function isPal(number){
	console.log(number);
	var check = String(number);
	check = check.split('');	
	console.log('check.length: ', check.length);
	if(check.length == 1){
		return true ;
	}
	if(check.length == 2){
		console.log('check.length == 2');	
		console.log(check[0], check[1]);
		console.log(check[0] == check[1]);
		if(check[0] == check[1]){
			return true;	
		}	
		else{
			return false;	
		}
	}
	else{
		if(check[0] == check[check.length - 1]){
			check.splice(0, 1);
			check.splice((check.length-1), 1);
			number = check.join('');
			isPal(number);
		}	
		else{
			return false ;	
		}
	}
}
if(isPal(x)){
	console.log('Is pal');
}
else{
	console.log('is not pal');
}

