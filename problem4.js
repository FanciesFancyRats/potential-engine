unsolved = true;
var x = 999;
var y = 999;
pals = [];
check = '';
answer = 0;

while(y > 100){
	for(x = 999; x > 100; x--){
		check = String(x * y);
		check = check.split('');
		isPal = true;
			while(isPal){
				if(check.length === 1){
					pals.push(x * y);
					isPal = false;
				}
				if(check.length === 2){
					if(check[0] === check[1]){
						pals.push(x*y);
						isPal = false;
					}		
					else{
						isPal = false;	
					}
				}
				else{
					if(check[0] === check[check.length - 1]){
						check.splice(0, 1);
						check.splice((check.length - 1), 1);
					}
					else{
						isPal = false;	
					}
				}
			}
	} 
	y -= 1;

}
for(i = 0; i < pals.length; i++){
	if(pals[i] > answer){
		answer = pals[i];	
	}
}
console.log(answer);
/*
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
*/
