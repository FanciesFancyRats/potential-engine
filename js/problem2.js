var x = 1;
var y =	2; 
var sum = 2;
function fib(x, y){
	if((x + y) < 4000000){
		y = y+x;
		x = y-x;	
		if(y%2 == 0){
			sum+=y;	
			console.log(y);
		}
		fib(x, y);
		
	}
	else{
		console.log(y);	
	}

}

fib(x, y);
console.log('sum')
console.log(sum);
