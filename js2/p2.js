function fib(x, y, limit, total){
	if(y > limit){
		console.log(total);
	}
	else{
		if(y % 2 == 0){
		total += y;
		}
		console.log(x);	
		fib(y, (x + y), limit, total);
	}
}
fib(1, 2, 4000000, 0);
