function makeFib(x, y, a){
	if(x < 4000000){
		if(x % 2 === 0)
			a.push(x);
		return(makeFib(y, (x + y), a));
	}
	else
		return a.reduce(function(x, y) {return x+y});
}
console.log(makeFib(1, 2, []));
