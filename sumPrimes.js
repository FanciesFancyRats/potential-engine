var factors = [];
var factor = 2;
var number = 600851475143;
var primes = 0;
var x = 2;
var sum = 0;

function isPrime(n){

	for(i=(n-1); i > 1; i--){
		if(n%i===0){
			return false;	
		}
	}
	return true;
} 
for(j=2; j < 2000000; j++){
	if(isPrime(j)){
		sum += j;
		console.log(j);
	}
}
console.log(sum);
