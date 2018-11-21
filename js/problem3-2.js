var factors = [];
var factor = 2;
var number = 600851475143;
var primes = 0;
var x = 2;

function isPrime(n){

	for(i=(n-1); i > 1; i--){
		if(n%i===0){
			return false;	
		}
	}
	return true;
} 

for(i = 3; i < 13; i++){
	console.log(i);
	a = isPrime(i);
	//console.log(a);
	}
//10 00`1
