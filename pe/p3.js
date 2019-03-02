function sieve(n, a){
	primes = [];
	while(n < a.length){
		if(n in a){
			primes.push(n);
			for(i = n; i < a.length; i +=n){
				delete a[i];	
			}
		}		
		n++;
	}
	return primes;
}

function fill(n){
	a = [];
	for(i = 0; i < n; i++){
		a.push(i);	
	}
	return(a);
}

function gpf(n, primes){
	pf = [];
	primes.forEach(function(v){if(n % v === 0){pf.push(v)}});	
	return(pf);
}
function solve(n){
	return(gpf(n, (sieve(2, fill(Math.sqrt(n))))));
}
console.log(solve(600851475143));
//console.log(gpf(13195, (sieve(2, fill(Math.sqrt(13195))))));



