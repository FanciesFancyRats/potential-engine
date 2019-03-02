function p1(n, a){
	if(n > 1000)
		return(a.reduce(function(x, y) {return x+y}));
	if(n % 3 === 0 || n % 5 === 0)
		a.push(n);
	return p1(n + 1, a);
}
console.log(p1(1, []));
