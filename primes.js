var isPrime = true;
var primes = [2];
var x = 3;
var sum = 0;

while (x < 2000000){
	isPrime = true;
	for(i = (x-1); i > 1; i--){
		if(x%i == 0){
		isPrime = false;	
		}
	}	
	if(isPrime){

		primes.push(x);	
		console.log(x);
		sum += x;

	}
	x += 1;
}
console.log(primes[(primes.length - 1)]);
console.log(sum);
//104743
