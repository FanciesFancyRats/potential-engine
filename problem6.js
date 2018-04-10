var isPrime = true;
var primes = [2];
var x = 3;

while (primes.length < 10001){
	isPrime = true;
	for(i = (x-1); i > 1; i--){
		if(x%i == 0){
		isPrime = false;	
		}
	}	
	if(isPrime){
		primes.push(x);	
	}
	x += 1;
}
console.log(primes[(primes.length - 1)]);
//104743
