
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

function sum(x, y){return x+y}

function solve(){return sieve(2, fill(2000000)).reduce(sum);}

console.log(solve());
