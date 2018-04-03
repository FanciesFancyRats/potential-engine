var x = 1;
var y =	2; 
var sum = 0;
console.log(x);
function fib(x, y){
	if((x + y) < 4000000){
		y = y+x;
		x = y-x;	
		//console.log('x: ');
		//console.log(x);
		//console.log('y: ');
		//console.log(y);
		fib(x, y);
	}
	else{
		console.log(y);	
	}

}

fib(x, y);
